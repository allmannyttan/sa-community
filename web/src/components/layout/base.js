import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../header'
import '../../base.css'

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
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="pt-24">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Base
