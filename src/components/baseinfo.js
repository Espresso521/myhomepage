import React from 'react'
import { Table, Tag } from 'antd'
import { Divider, Avatar, BackTop } from 'antd'
import {
  AudioTwoTone,
  AndroidOutlined,
  AmazonOutlined,
  Html5TwoTone,
  CustomerServiceTwoTone,
  VideoCameraTwoTone,
  MessageTwoTone,
  IeOutlined,
  SoundTwoTone,
} from '@ant-design/icons'

const columns = [
  {
    title: <MessageTwoTone />,
    key: 'languages',
    dataIndex: 'languages',

    render: (_, { languages }) => (
      <>
        {languages.map((lang) => {
          let color = 'pink'
          return (
            <Tag color={color} key={lang}>
              {lang}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: <><IeOutlined style={{ 'color': 'blue' }} /><AmazonOutlined style={{ 'color': '#DAA520' }} /><Html5TwoTone /><AndroidOutlined style={{ 'color': 'green' }} /></>,
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = 'geekblue'
          {/* if (tag.length === 2) {
            color = 'purple'
          } else if (tag.length === 3) {
            color = 'blue'
          } else if (tag.length === 4) {
            color = 'geekblue'
          } else if (tag.length === 5) {
            color = 'green'
          } else if (tag.length === 6) {
            color = 'volcano'
          } else if (tag.length === 7) {
            color = 'pink'
          } else {
            color = 'red'
          } */}

          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: <><AudioTwoTone /><SoundTwoTone /><CustomerServiceTwoTone /><VideoCameraTwoTone /></>,
    key: 'technicals',
    dataIndex: 'technicals',

    render: (_, { technicals }) => (
      <>
        {technicals.map((tech) => {
          let color = 'purple'
          return (
            <Tag color={color} key={tech}>
              {tech}
            </Tag>
          )
        })}
      </>
    ),
  },
]
const data = [
  {
    key: '1',
    name: 'HU ZE',
    age: 39,
    address: 'Tokyo',
    education: 'Master',
    languages: ['Native Chinese', 'CET-6 English', 'N2 Japanese'],
    tags: ['GO', 'Java', 'React', 'Kotlin', 'Android', 'AWS SAA', 'SpringBoot', 'IRIS Core Develop'],
    technicals: ['SIP', 'RTP', 'H264', 'AAC', 'G711', 'RTSP', 'FFmpeg', 'MediaCodec'],
  },
]

const baseinfo = function baseinfo (props) {
  return (
    <div>
      <BackTop />
      <Divider>
        <Avatar
          alt="Profile Avatar"
          src="/myself.jpg"
          size={60}
        />
      </Divider>
      <div style={{ 'display': 'flex' }}>
        <div style={{ 'marginTop': '5px' }}>
          <Table bordered columns={columns} dataSource={data} size="large" pagination={{
            position: ['none', 'none']
          }} />
        </div>
      </div>
    </div>
  )
}

export default baseinfo