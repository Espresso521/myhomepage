import React from "react"
import { Link } from "gatsby"
import BaseInfo from '../components/baseinfo'
import MyTimeLine from '../components/mytimeline'
import Certification from '../components/certification'

import {
  LeftOutlined,
} from '@ant-design/icons'

const about = () => (
  <div className="global-wrapper">
    <span className="about_link_home">
      <Link to="/"><LeftOutlined />Just do IT</Link>
    </span>

    <BaseInfo />

    <MyTimeLine />

    <Certification />

  </div>
)

export default about