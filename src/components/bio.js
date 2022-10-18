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
        style={{ 'marginRight': '10px', 'marginTop': '5px' }}
        alt="Profile Avatar"
        src="/myself.jpg"
        size={75}
      />
      <p>
        I'm <strong>Hu Ze</strong> from <big>Tokyo</big>
        <br></br>
        <span>
          <i>You can contact me:</i> <a href="mailto:kotaku20220424@gmail.com">My Gmail</a>
        </span><br></br>
        <span>
          <i>You can chat to me in</i> <a href="/chattome">My ChatRoom</a>
        </span>
      </p>

    </div>
  )
}

export default Bio
