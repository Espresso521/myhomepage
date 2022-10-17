import React from 'react'
import { v4 as uuid } from 'uuid'
import { PageHeader, Descriptions, Avatar, List, Skeleton } from 'antd'
import '../index.css'
import avatar from '../images/gatsby-icon.png'

function formatTime (time) {
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}

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
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
    },
  ],

}

function test () {
  return (
    <div className="App">
      <div className='comment-head'>1</div>
      {/* <div>
        {state.list.map(item => (
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
      </div> */}

      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={state.list}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={avatar} />}
              title={item.author}
              description={item.comment}
            />
          </List.Item>
        )}
      />
      <div className='comment-send'>3</div>

    </div>
  )
}

export default test