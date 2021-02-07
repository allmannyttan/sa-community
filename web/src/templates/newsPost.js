import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/BlockContent'
import Layout from '../components/Layout'

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
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <BlockContent blocks={data._rawBody}></BlockContent>
      </div>
    </Layout>
  )
}

export default Component
