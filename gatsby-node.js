const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const AWS = require("aws-sdk") // from AWS SDK
const fs = require("fs")
const mime = require("mime")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

// create your defined node here
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // use node.internal.type to filter your own node
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

exports.onPostBuild = async function ({ reporter }) {
  AWS.config.setPromisesDependency(Promise)
  const folderPath = path.join(__dirname, "./public")
  const filesPaths = await walkSync(folderPath)
  if (filesPaths.length === 0) return
  // create S3 Object
  const s3 = new AWS.S3({
    signatureVersion: 'v4',
  })
  for (let i = 0; i < filesPaths.length; i++) {
    const statistics = `(${i + 1}/${filesPaths.length}, ${Math.round((i + 1) / filesPaths.length * 100)}%)`
    const filePath = filesPaths[i]
    const fileContent = fs.readFileSync(filePath)
    // If the slash is like this "/" s3 will create a new folder, otherwise will not work properly.
    const relativeToBaseFilePath = path.normalize(path.relative(folderPath, filePath))
    const relativeToBaseFilePathForS3 = relativeToBaseFilePath.split(path.sep).join('/')
    const mimeType = mime.getType(filePath)
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
    await s3.putObject({
      Bucket: 'kotaku-blog',
      Key: relativeToBaseFilePathForS3,
      Body: fileContent,
      ContentType: mimeType,
    }).promise()
    console.log(`Uploaded `, statistics, relativeToBaseFilePathForS3)
  }
}

async function walkSync (dir) {
  const files = fs.readdirSync(dir)
  const output = []
  for (const file of files) {
    const pathToFile = path.join(dir, file)
    const isDirectory = fs.statSync(pathToFile).isDirectory()
    if (isDirectory) {
      output.push(...await walkSync(pathToFile))
    } else {
      output.push(await pathToFile)
    }
  }
  return output
}