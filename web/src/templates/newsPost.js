import React from 'react'
import { graphql } from 'gatsby'
import ArticlePage from '../components/layout/articlePage'

export const query = graphql`
  query newsPostTemplateQuery($id: String!) {
    sanityNewsPost(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      author {
        name
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityNewsPost: data },
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
