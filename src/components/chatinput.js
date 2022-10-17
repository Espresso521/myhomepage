import React, { useState } from 'react'
import '../index.css'
import { Divider } from 'antd'


const state = {
  content: '',
}

function ChatInput (props) {

  const [data, setDate] = useState(state)

  return (
    <div className="comment-send">
      <Divider />
      <div className="comment-emoji">
        <i className="face"></i>
        <span className="text">表情</span>
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
        }} className="comment-submit">Send</button>
      </div>

    </div>
  )
}

export default ChatInput