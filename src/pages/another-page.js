import React from "react"
import { Link } from "gatsby"

import { page, link, header } from "../style/another-page.module.css"
import { container } from "../style/container.module.css"

class IndexComponent extends React.Component {
  render () {
    return (
      <div className={page}>
        <h1 className={header}>Hello mildly weary world</h1>
        <h1 className={container}>Hello mildly weary world</h1>
        <Link to="/" className={link}>
          Back home
        </Link>
      </div>
    )
  }
}

export default IndexComponent