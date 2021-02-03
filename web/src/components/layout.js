import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Header = ({ siteTitle = '' }) => {
  return (
    <header className="bg-saGreen">
      <nav>
        <ul className="py-4 px-12 flex justify-end gap-8">
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/projekt">Projekt</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="">
      <Header siteTitle={`Title`} />

      <main className="">{children}</main>
    </div>
  )
}

export default Layout
