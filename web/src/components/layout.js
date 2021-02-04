import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import '../base.css'

const Header = ({ siteTitle = '' }) => {
  return (
    <header className="bg-saGreen">
      <nav>
        <ul className="py-4 px-12 flex justify-end gap-8 text-white text-lg font-bold  max-w-screen-2xl">
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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="">{children}</main>
    </div>
  )
}

export default Layout
