import React from 'react'
import { graphql } from 'gatsby'
import ArticlePage from '../components/layout/articlePage'
import SEO from '../components/seo'

export const query = graphql`
  query newsPostTemplateQuery($id: String!) {
    sanityNewsPost(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      descriptionText
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
      />
    </>
  )
}

export default Component
