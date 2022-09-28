/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="constrained"
        formats={["auto", "webp", "avif"]}
        src="../images/myself.jpg"
        width={100}
        height={100}
        quality={75}
        alt="Profile picture"
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
