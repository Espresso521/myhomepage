import React from "react"

import Container from "../components/container"
import { Link } from "gatsby"
import { page, link, header } from "../style/another-page.module.css"

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <h2>About CSS Modules</h2>
    <h3>About CSS Modules</h3>
    <p>CSS Modules are cool</p>

    <Link to="/">
      Back home
    </Link>
  </Container>
)