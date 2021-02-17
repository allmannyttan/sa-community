import React from 'react'
import { graphql } from 'gatsby'
import ArticlePage from '../components/layout/articlePage'

export const query = graphql`
  query projectTemplateQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
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
    data: { sanityProject: data },
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
