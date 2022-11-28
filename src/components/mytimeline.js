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
        <Timeline.Item label={<p className='comLabel'>Now</p>} color="red" dot={<HeartOutlined />}><p className='comP'>Just do IT</p></Timeline.Item>
        {/* <Timeline.Item label={<p className='comLabel'>2022-05</p>} dot={<LaptopOutlined />}><p className='comP'>Join Servicememe</p></Timeline.Item> */}
        <Timeline.Item label={<p className='comLabel'>2022-04</p>} dot={<RocketOutlined />}><p className='comP'>Arrived Tokyo</p></Timeline.Item>
        <Timeline.Item color={"green"} dot={<SyncOutlined spin />}><p className='comP'>...</p></Timeline.Item>
        <Timeline.Item label={<p className='comLabel'>2013-12</p>} dot={<LaptopOutlined />}><p className='comP'>Join VIA Tech</p></Timeline.Item>
        <Timeline.Item label={<p className='comLabel'>2012-03</p>} dot={<LaptopOutlined />}><p className='comP'>Join O2MICRO</p></Timeline.Item>
        <Timeline.Item color="blue" label={<p className='comLabel'>2012-03</p>} dot={<HomeOutlined />}>
          <Tooltip placement="topLeft" title="HUST === Huazhong University of Science and Technology" color={'cyan'} key={'cyan'}>
            <p className='comP'>Master Graduated from HUST</p>
          </Tooltip>
        </Timeline.Item>
        <Timeline.Item color="#DAA520" label={<p className='comLabel'>2009-06</p>} dot={<HomeOutlined />}>
          <Tooltip placement="topLeft" title="HUST === Huazhong University of Science and Technology" color={'cyan'} key={'cyan'}>
            <p className='comP'>Bachelor Graduated from HUST</p>
          </Tooltip>
        </Timeline.Item>
        <Timeline.Item label={<p className='comLabel'>1983-05</p>} color="#00CCFF" dot={<SmileOutlined />}><p className='comP'>Born</p></Timeline.Item>
      </Timeline>
    </div>
  )
}

export default mytimeline