import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../header'
import '../../base.css'
import Footer from '../footer'

const Base = ({ children }) => {
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
    <div className="min-h-screen flex flex-col">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="pt-24 "></div>
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}

export default Base
