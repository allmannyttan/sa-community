import React from 'react'
import { graphql } from 'gatsby'
import ArticlePage from '../components/layout/articlePage'
import SEO from '../components/seo'

export const query = graphql`
  query projectTemplateQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      description
      keywords
      tableOfContents
      _type
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`

const Component = ({ data }) => {
  const { sanityProject } = data

  return (
    <>
      <SEO
        title={sanityProject.title}
        keywords={sanityProject.keywords}
        article={true}
        description={sanityProject.description}
      />

      <ArticlePage
        tableOfContents={sanityProject.tableOfContents}
        rawBody={sanityProject._rawBody}
        title={sanityProject.title}
      />
    </>
  )
}

export default Component
