import '../index.css'
import avatar from '../images/gatsby-icon.png'
import { v4 as uuid } from 'uuid'
import React, { useState } from 'react'

// 依赖的数据
const state = {
  // chat history
  list: [
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Hi everyone. Nice to meet you!',
      time: new Date(),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1
    },
  ],
  // the input content
  comment: ''

}

function formatTime ({ time = new Date() }) {
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}

function Chat () {

  const [data, setDate] = useState(state)

  const switchTab = (type) => {
    console.log(type)
    setDate({
      ...data,
      active: type
    })
  }

  const submitComment = (comment) => {
    if (comment === null || comment === '') return
    console.log(comment)
    setDate({
      ...data,
      list: [
        ...data.list,
        {
          id: uuid(),
          author: 'Espresso',
          comment: data.comment,
          time: new Date(),
          // 1: 点赞 0：无态度 -1:踩
          attitude: 0
        }
      ]
    })
  }

  const changeComment = (e) => {
    setDate({
      ...data,
      comment: e.target.value
    })
  }

  const deleteCmt = (id) => {
    console.log(id)
    setDate({
      ...data,
      list: data.list.filter(item => item.id !== id)
    })
  }

  const attitudeClick = (e, clickedItem) => {

    //console.log(e)
    //console.log(clickedItem)
    setDate({
      ...data,
      list: data.list.map((item) => {
        if (item.id === clickedItem.id) {
          let res = null
          if (e.target.id === '1Icon') {
            res = item.attitude - 1 === 0 ? 0 : 1
          } else if (e.target.id === '2Icon') {
            res = item.attitude + 1 === 0 ? 0 : -1
          }

          return {
            ...item,
            attitude: res
          }
        } else {
          return item
        }
      })
    })
  }

  return (
    <div className="App">
      <div className="comment-container">
        {/* 评论数 */}
        <div className="comment-head">
          <span>{data.list.length}评论</span>
        </div>

        {/* 添加评论 */}
        <div className="comment-send">
          <div className="user-face">
            <img className="user-head" src={avatar} alt="" />
          </div>
          <div className="textarea-container">
            <textarea
              cols="80"
              rows="5"
              placeholder="发条友善的评论"
              className="ipt-txt"
              onChange={(e) => changeComment(e)}
              value={data.comment}
            />
            <button onClick={() => submitComment(data.comment)} className="comment-submit">发表评论</button>
          </div>
          <div className="comment-emoji">
            <i className="face"></i>
            <span className="text">表情</span>
          </div>
        </div>

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
                  <span id='1Icon' onClick={(e) => attitudeClick(e, item)} className={item.attitude === 1 ? "like liked" : "like"}>
                    <i id='1Icon' className="icon" />
                  </span>
                  <span id='2Icon' onClick={(e) => attitudeClick(e, item)} className={item.attitude === -1 ? "hate hated" : "hate"}>
                    <i id='2Icon' className="icon" />
                  </span>
                  <span onClick={() => deleteCmt(item.id)} className="reply btn-hover">删除</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div >
  )
}

export default Chat
