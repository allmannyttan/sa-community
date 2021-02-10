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
      _rawBody(resolveReferences: { maxDepth: 10 })
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
        <h2 className="text-center text-2xl mt-12">{data.title}</h2>
        <BlockContent blocks={data._rawBody}></BlockContent>
      </div>
    </Layout>
  )
}

export default Component
