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
          src="/aws.png"
        />

        <Image
          width={250}
          height={250}
          src="/iris.png"
        />

        <Image
          width={250}
          height={250}
          src="/n2.jpeg"
        />
      </Image.PreviewGroup>

    </div>
  )
}

export default certification