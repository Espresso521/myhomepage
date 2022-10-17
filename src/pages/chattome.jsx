import '../index.css'
import avatar from '../images/gatsby-icon.png'
import { v4 as uuid } from 'uuid'
import React, { useState } from 'react'
import ChatInput from '../components/chatinput'
import { Link } from "gatsby"
import { PageHeader, Descriptions, Avatar } from 'antd'
import InfiniteScroll from "react-infinite-scroll-component"

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
      {/* Header */}
      <div className="comment-head">
        <PageHeader
          ghost={false}
          onBack={() => window.location.href = "/"}
          title="Welcome to Chat Room"
        >
          <Descriptions size="small" column={2}>
            <Descriptions.Item label="User Number">3</Descriptions.Item>
            <Descriptions.Item label="Message Number ">{data.list.length} </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>

      {/* 评论列表 */}
      <InfiniteScroll
        dataLength={state.list.length}
        loader={<h4>Loading...</h4>}
        height={550}
      >
        {data.list.map(item => (
          <div className="list-item" key={item.id}>
            <Avatar
              alt="Profile Avatar"
              src={avatar}
              size={30}
            />
            <div className="comment">
              <div className="user">{item.author}</div>
              <i className="text">{item.comment}</i>
              <div className="info">
                <span className="time">{formatTime(item.time)}</span>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>

      {/* 添加评论 */}
      <ChatInput submitComment={submitComment} />
    </div>
  )
}

export default Chat
