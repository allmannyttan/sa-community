import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/blockContent'
import Layout from '../components/layout'
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
    <Layout>
      <SEO
        title={data.title}
        article={true}
        description={data.descriptionText}
      />
      <div>
        <h1>{data.title}</h1>
        <BlockContent blocks={data._rawBody}></BlockContent>
      </div>
    </Layout>
  )
}

export default Component
