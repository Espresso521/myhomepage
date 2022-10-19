import React, { useState } from 'react'
import '../index.css'
import {
  Button,
  Input,
} from 'antd'


const state = {
  content: '',
}

function ChatInput (props) {

  const [data, setDate] = useState(state)

  return (
    <div className="comment-send">
      <Input.Group compact className='comment-send'>
        <Input
          style={{
            width: 'calc(100% - 121px)',
          }}
          onChange={(e) => {
            setDate({ content: e.target.value })
          }}
          value={data.content}

          onPressEnter={(e) => {
            e.preventDefault()
            props.submitComment(data.content)
            setDate({ content: '' })
          }}
        />
        <Button type="primary" onClick={() => {
          props.submitComment(data.content)
          setDate({ content: '' })
        }}>Send</Button>
      </Input.Group>
    </div>
  )
}

export default ChatInput