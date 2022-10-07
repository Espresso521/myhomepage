const path = require('path')
const fs = require("fs")
const mime = require("mime")

const filePath = path.join(__dirname, "./public")

console.log('filepath is ' + filePath)

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

async function test (folderPath) {
  const filesPaths = await walkSync(folderPath)
  let num = 0
  filesPaths.forEach(element => {
    console.log(element)
    num = num + 1
  })

  console.log("total file number is " + num)
}

test(filePath)



