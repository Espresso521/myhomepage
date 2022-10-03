import React from 'react'
import { Table, Tag } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 88,
    key: 'name',
    render: (text) => <i style={{ 'color': 'blue' }}>{text}</i>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <i style={{ 'color': 'green' }}>{text}</i>,
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
    tags: ['GO', 'Java', 'Android', 'kotlin', 'AWS SAA', 'React', 'JLPT N2', 'SpringBoot', 'IRIS Core Solution'],
  },
]

const baseinfo = function baseinfo (props) {
  return (
    <div>
      <div className="bio">
        <div style={{ 'marginTop': '5px' }}>
          <Table bordered columns={columns} dataSource={data} pagination={{
            position: ['none', 'none']
          }} />
        </div>
      </div>
    </div>
  )
}

export default baseinfo