import React from 'react'
import { Divider, Image } from 'antd'

function certification () {
  return (
    <div>
      <Divider>
        <span className="about_career_font">Certification</span>
      </Divider>

      <Image.PreviewGroup>
        <Image
          width={250}
          height={250}
          src="/aws.jpg"
        />

        <Image
          width={250}
          height={250}
          src="/iris.jpg"
        />

        <Image
          width={250}
          height={250}
          src="/n2.jpg"
        />
      </Image.PreviewGroup>

    </div>
  )
}

export default certification