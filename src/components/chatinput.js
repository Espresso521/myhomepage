import React, { useState } from 'react'
import '../index.css'
import avatar from '../images/gatsby-icon.png'

const state = {
  content: '',
}

function ChatInput (props) {

  const [data, setDate] = useState(state)

  return (
    <div className="comment-send">
      <div className="user-face">
        <img className="user-head" src={avatar} alt="" />
      </div>
      <div className="textarea-container">
        <textarea
          cols="80"
          rows="2"
          placeholder=""
          className="ipt-txt"
          onChange={(e) => {
            setDate({ content: e.target.value })
          }}
          value={data.content}
        />
        <button onClick={() => {
          props.submitComment(data.content)
          setDate({ content: '' })
        }} className="comment-submit">发表评论</button>
      </div>
      <div className="comment-emoji">
        <i className="face"></i>
        <span className="text">表情</span>
      </div>
    </div>
  )
}

export default ChatInput