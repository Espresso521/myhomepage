import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const about = () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)

export default about