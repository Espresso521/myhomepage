import React from "react"
import { Link } from "gatsby"
import { Divider } from 'antd'
import BaseInfo from '../components/baseinfo'
import { Avatar } from '@mui/material'

const about = () => (
  <div className="global-wrapper">
    <h3 className="about_link_home">
      <Link to="/">HU ZEのBlog</Link>
    </h3>

    <Divider>
      <Avatar
        className="bio-avatar"
        alt="Profile Avatar"
        src="/myself.jpg"
        sx={{ width: 75, height: 75 }}
      />
    </Divider>

    <BaseInfo />

  </div>
)

export default about