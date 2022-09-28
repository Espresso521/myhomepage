/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Avatar } from '@mui/material'

const Bio = () => {

  return (
    <div className="bio">
      <Avatar
        className="bio-avatar"
        alt="Profile Avatar"
        src="/myself.jpg"
        sx={{ width: 75, height: 75 }}
      />

      <p>
        Written by <strong>Hu Ze</strong> who <i>lives</i> and <i>works</i> in <big>Tokyo</big>
        <br></br>
        <a href={`https://twitter.com/kotaku20220424`}>
          You can follow me on Twitter
        </a>
      </p>

    </div>
  )
}

export default Bio
