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
    //console.log(element)
    num = num + 1
  })

  console.log("total file number is " + num)
}

test(filePath)

function testDate () {
  var t = new Date()
  console.log(t.getFullYear())
  console.log(t.getMonth() + 1)
  console.log(t.getDate())
  console.log(t.getHours())
  console.log(t.getMinutes())
  console.log(t.getSeconds())
}

//testDate()

function testSocket (params) {
  console.log('start test socket')
  // 连接服务器, 得到与服务器的连接对象
  const socket = require("socket.io-client")('ws://0.0.0.0:5210')
  // 绑定监听, 接收服务器发送的消息
  socket.on('receiveMsg', function (data) {
    console.log('客户端接收服务器发送的消息', data)
  })

  // 发送消息
  socket.emit('sendMsg', { name: 'abc' })
  console.log('客户端向服务器发消息', { name: 'abc' })

}

var net = require('net')

function testTcp (params) {
  var client = new net.Socket()
  client.connect(5210, '0.0.0.0', function () {
    console.log('Connected')
    client.write('Hello, server! Love, Client.')
  })

  client.on('data', function (data) {
    console.log('Received: ' + data)
    client.destroy() // kill client after server's response
  })

  client.on('close', function () {
    console.log('Connection closed')
  })
}

testTcp()

