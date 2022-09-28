import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  //console.log("rootpath is " + rootPath + "; isRootPath is " + isRootPath + "; location.pathname is " + location.pathname)
  let header

  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          {title}
          <Link className="blog-post-about-me" to="/aboutme">
            AboutMe
          </Link>
        </h1>
      </div>
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
      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
