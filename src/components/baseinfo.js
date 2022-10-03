import React from 'react'
import { Table, Tag } from 'antd'
import { Avatar } from '@mui/material'
import { Divider } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 88,
    key: 'name',
    render: (text) => <i className='about_table_name_address'>{text}</i>,
  },
  {
    title: 'Education',
    dataIndex: 'education',
    key: 'education',
    render: (text) => <i className='about_table_name_address'>{text}</i>,
  },
  {
    title: 'Skills',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color
          if (tag.length === 2) {
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
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
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
    tags: ['GO', 'Java', 'Android', 'kotlin', 'AWS SAA', 'React',
      'JLPT N2', 'SpringBoot', 'IRIS Core Develop', 'RTSP', 'MediaCodec', 'FFmpeg', 'H264', 'AAC', 'G711'],
  },
]

const baseinfo = function baseinfo (props) {
  return (
    <div>
      <Divider>
        <Avatar
          className="bio-avatar"
          alt="Profile Avatar"
          src="/myself.jpg"
          sx={{ width: 75, height: 75 }}
        />
      </Divider>
      <div style={{ 'display': 'flex' }}>
        <div style={{ 'marginTop': '5px' }}>
          <Table bordered columns={columns} dataSource={data} size="small" pagination={{
            position: ['none', 'none']
          }} />
        </div>
      </div>
    </div>
  )
}

export default baseinfo