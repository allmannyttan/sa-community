import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import '../base.css'

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
