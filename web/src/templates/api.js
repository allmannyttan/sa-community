import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/blockContent'
import Layout from '../components/layout'

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
      _rawRichText(resolveReferences: { maxDepth: 10 })
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityApi: data },
  } = props

  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <BlockContent blocks={data._rawRichText}></BlockContent>
      </div>
    </Layout>
  )
}

export default Component
