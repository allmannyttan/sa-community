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
    allSanityNewsPost {
      edges {
        node {
          slug {
            current
          }
          title
        }
      }
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityNewsPost: data, allSanityNewsPost },
  } = props

  const newsPosts = allSanityNewsPost.edges.map(({ node }) => node)

  return (
    <>
      <SEO
        title={data.title}
        article={true}
        description={data.descriptionText}
      />
      <ArticlePage
        tableOfContents={false}
        rawBody={data._rawBody}
        title={data.title}
        newsSideMenu={newsPosts}
      />
    </>
  )
}

export default Component
