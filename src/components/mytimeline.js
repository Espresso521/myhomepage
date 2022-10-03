import {
  HomeOutlined,
  RocketOutlined,
  SmileOutlined,
  SyncOutlined,
  LaptopOutlined,
  HeartOutlined,
} from '@ant-design/icons'
import { Timeline, Tooltip, Divider } from 'antd'
import React from 'react'

function mytimeline () {
  return (
    <div>
      <Divider>
        <span className="about_career_font">Career</span>
      </Divider>
      <Timeline mode={'right'}>
        <Timeline.Item label="Now" dot={<HeartOutlined />}>Adventure Continue</Timeline.Item>
        <Timeline.Item label="2022-05" dot={<LaptopOutlined />}>Join Servicememe</Timeline.Item>
        <Timeline.Item label="2022-04" dot={<RocketOutlined />}>Arrive Tokyo</Timeline.Item>
        <Timeline.Item dot={<SyncOutlined spin />}>...</Timeline.Item>
        <Timeline.Item label="2012-03" dot={<LaptopOutlined />}>Join VIA Tech</Timeline.Item>
        <Timeline.Item color="blue" label="2012-03" dot={<HomeOutlined />}>
          <Tooltip placement="topLeft" title="HUST === Huazhong University of Science and Technology" color={'cyan'} key={'cyan'}>
            Master Graduated from HUST
          </Tooltip>
        </Timeline.Item>
        <Timeline.Item color="#DAA520" label="2009-06" dot={<HomeOutlined />}>
          <Tooltip placement="topLeft" title="HUST === Huazhong University of Science and Technology" color={'cyan'} key={'cyan'}>
            Bahelor Graduated from HUST
          </Tooltip>
        </Timeline.Item>
        <Timeline.Item label="1983-05" color="#00CCFF" dot={<SmileOutlined />}>I was born</Timeline.Item>
      </Timeline>
    </div>
  )
}

export default mytimeline