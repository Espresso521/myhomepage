import React from "react"
import { Link } from "gatsby"
import BaseInfo from '../components/baseinfo'
import MyTimeLine from '../components/mytimeline'

import {
  LeftOutlined,
} from '@ant-design/icons'

const about = () => (
  <div className="global-wrapper">
    <span className="about_link_home">
      <Link to="/"><LeftOutlined />Home</Link>
    </span>

    <BaseInfo />

    <MyTimeLine />

  </div>
)

export default about