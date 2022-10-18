import '../index.css'
import { v4 as uuid } from 'uuid'
import React, { useState, useEffect } from 'react'
import ChatInput from '../components/chatinput'
import { PageHeader, Avatar } from 'antd'
import ScrollToBottom from 'react-scroll-to-bottom'

// 依赖的数据
const state = {
  // chat history
  list: [
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'How R U! Nice to meet U!',
      time: new Date(),
      isMe: false,
      userid: 1
    },
  ],
}

function formatTime (time) {
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}

function getAvatar (item) {
  if (item.author === 'Kotaku') {
    return '/5avatar.svg'
  } else {
    return '/1avatar.svg'
  }
}

function socketio (params) {

  var ws = new WebSocket("ws://localhost:8080/echo")
  ws.onopen = function (evt) {
    console.log("OPEN")
    ws.send('fuck you!!!!!!!!!!!!!!!!!')
    ws.send('baga   \njfkdsjfksjflsf')
  }
  ws.onclose = function (evt) {
    console.log("CLOSE")
    ws = null
  }
  ws.onmessage = function (evt) {
    console.log("RESPONSE: " + evt.data)
  }
  ws.onerror = function (evt) {
    console.log("ERROR: " + evt.data)
  }

}

function Chat () {

  const [data, setDate] = useState(state)

  useEffect(() => {
    // 添加禁止缩放的meta标签
    // <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>
    Array.from(document.getElementsByTagName('meta')).filter(i => {
      if (i.name === 'viewport') {
        //不允许缩放
        // <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
        i.content = "width=device-width, initial-scale=1, shrink-to-fit=no,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      }
      return i
    })

    socketio()
  }, [])

  const submitComment = (comment) => {
    if (comment === null || comment === '') return
    setDate({
      ...data,
      list: [
        ...data.list,
        {
          id: uuid(),
          author: 'Espresso',
          comment: comment,
          time: new Date(),
          isMe: true,
        }
      ]
    })
  }

  return (
    <div className="App">
      {/* Header */}
      <div className="comment-head">
        <PageHeader
          className="site-page-header"
          onBack={() => window.location.href = "/"}
          title="Just Do IT"
          subTitle="Server By GO"
        />

        {/* 评论列表 */}
        <ScrollToBottom className="comment-list">
          {data.list.map(item => {
            if (item.isMe) {
              return (
                <div className="list-item" key={item.id}>
                  <div className="commentme">
                    <div className="userme">{item.author}</div>
                    <p className="textme">{item.comment}</p>
                    <div className="info">
                      <span className="timeme">{formatTime(item.time)}</span>
                    </div>
                  </div>
                  <Avatar
                    alt="Profile Avatar"
                    src={getAvatar(item)}
                    size={25}
                  />
                </div>
              )
            } else {
              return (
                <div className="list-item" key={item.id}>
                  <Avatar
                    alt="Profile Avatar"
                    src={getAvatar(item)}
                    size={25}
                  />
                  <div className="comment">
                    <div className="user">{item.author}</div>
                    <p className="text">{item.comment}</p>
                    <div className="info">
                      <span className="time">{formatTime(item.time)}</span>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </ScrollToBottom>

        {/* 添加评论 */}
        <ChatInput submitComment={submitComment} />
      </div>
    </div>
  )
}

export default Chat
