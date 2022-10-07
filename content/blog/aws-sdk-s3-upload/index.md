---
title: Upload to S3 by AWS SDK
date: "2022-10-08"
description: "After Gatysby build finish, use AWS SDK to upload ./public folder to S3 bucket."
---

## 3 points for using AWS SDK to upload file to S3 bucket

> #### 1. onPostBuild method use async method

Gatsby gives plugins and site builders many APIs for building your site. Code in the file **gatsby-node.js** is run once in the process of building your site.

Pay attention to [Async vs. sync work](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#async-vs-sync-work)

    // Async/await
    exports.onPostBuild = async () => {
      // do async work
      const result = await fetchExternalData()
    }

    // Promise API
    exports.onPostBuild = () => {
      return new Promise((resolve, reject) => {
        // do async work
      })
    }

> #### 2. Create a IAM user to do upload work

Use the **Access key ID** and **Secret access key** to construct S3 object, then you can use this S3 object to putObject.

    const s3 = new AWS.S3({
      signatureVersion: 'v4',
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKeyId,
    })

For the security, you can use _export_ command to set **Access key ID** and **Secret access key** to your local environment variant

    export AWS_ACCESS_KEY_ID=YOURACCESSKEYID
    export AWS_SECRET_ACCESS_KEY=YOURSECRETACCESSKEY

> #### 3. Refer to the sdk document

[AWS JavaScript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)

The terminal output like this.

    Uploading (155/160, 97%) ~partytown/debug/partytown-ww-sw.js
    Uploaded  (156/160, 98%) ~partytown/debug/partytown.js
    Uploading (157/160, 98%) ~partytown/partytown-atomics.js
    Uploaded  (158/160, 99%) ~partytown/partytown-media.js
    Uploaded  (159/160, 99%) ~partytown/partytown-sw.js
    Uploading (160/160, 100%) ~partytown/partytown.js
    success onPostBuild - 29.862s
    info Done building in 54.415459 sec
