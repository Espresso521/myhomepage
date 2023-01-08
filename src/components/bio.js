/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Avatar } from 'antd'

const Bio = () => {

  return (
    <div className="bio">
      <Avatar
        style={{ 'marginRight': '11px', 'marginTop': '15px' }}
        alt="Profile Avatar"
        src="/myself.jpg"
        size={110}
      />
      <p>
        I'm <strong>Hu Ze</strong> live in <big>Tokyo</big>
        <br></br>
        Clone my website: <a href="https://github.com/Espresso521">GitHub</a><br></br>
        <span>
          <i>Contact me:</i> <a href="mailto:kotaku20220424@gmail.com">My Gmail</a>
        </span><br></br>
        <span>
          <i>Chat to me:</i> <a href="/chattome">ChatRoom</a>
        </span><br></br>
        <span>
          <a href="https://www.jw.org/"><img src="/bible-solid.png"></img></a>
        </span>
      </p>

    </div>
  )
}

export default Bio
