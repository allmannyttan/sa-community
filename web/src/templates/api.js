import React from 'react'
import { graphql } from 'gatsby'
import ArticlePage from '../components/layout/articlePage'
import SEO from '../components/seo'

export const query = graphql`
  query sanityApi($id: String!) {
    sanityApi(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      descriptionText
      tableOfContents
      _type
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityApi: data },
  } = props

  return (
    <>
      <SEO
        title={data.title}
        article={true}
        description={data.descriptionText}
      />
      <ArticlePage
        tableOfContents={data.tableOfContents}
        rawBody={data._rawBody}
        title={data.title}
        newsSideMenu={false}
      />
    </>
  )
}

export default Component
