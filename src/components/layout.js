import * as React from "react"
import { Link } from "gatsby"
import {
  CopyrightOutlined,
} from '@ant-design/icons'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="main-heading">
          {title}
        </h1>
        <Link className="blog-post-about-me" to="/aboutme">
          AboutMe
        </Link>
      </>
    )
  } else {
    header = (
      <>
        <Link className="header-link-home-blog" to="/">
          {title}
        </Link>
        <Link className="blog-post-about-me-blog" to="/aboutme">
          AboutMe
        </Link>
        <hr />
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="global-footer">
        <CopyrightOutlined /> {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
