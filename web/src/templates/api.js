import React from 'react'
import { graphql } from 'gatsby'
import ArticlePage from '../components/layout/articlePage'

export const query = graphql`
  query sanityApi($id: String!) {
    sanityApi(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
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
    <ArticlePage
      tableOfContents={data.tableOfContents}
      rawBody={data._rawBody}
      title={data.title}
    />
  )
}

export default Component
