import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/blockContent'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query sanityApi($id: String!) {
    sanityApi(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      SEOText
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
      <SEO title={data.title} article={true} description={data.SEOText} />
      <div>
        <h2 className="text-center text-2xl mt-12">{data.title}</h2>
        <BlockContent blocks={data._rawBody} withAnchor={true}></BlockContent>
      </div>
    </Layout>
  )
}

export default Component
