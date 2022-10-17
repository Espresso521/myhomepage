import '../index.css'
import avatar from '../images/gatsby-icon.png'
import { v4 as uuid } from 'uuid'
import React, { useState } from 'react'
import ChatInput from '../components/chatinput'

// 依赖的数据
const state = {
  // chat history
  list: [
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
  ],

}

function formatTime (time) {
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}

function Chat () {

  const [data, setDate] = useState(state)

  const submitComment = (comment) => {
    console.log("comment is " + comment)
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
        }
      ]
    })
  }

  return (
    <div className="App">
      <div className="comment-container">
        {/* message number */}

        {/* 评论列表 */}
        <div className="comment-list">
          {data.list.map(item => (
            <div className="list-item" key={item.id}>
              <div className="user-face">
                <img className="user-head" src={avatar} alt="" />
              </div>
              <div className="comment">
                <div className="user">{item.author}</div>
                <p className="text">{item.comment}</p>
                <div className="info">
                  <span className="time">{formatTime(item.time)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="comment-head">
          <span>{data.list.length} Messages</span>
        </div>

        {/* 添加评论 */}
        <ChatInput submitComment={submitComment} />
      </div>
    </div>
  )
}

export default Chat
