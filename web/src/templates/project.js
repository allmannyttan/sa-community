import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/blockContent'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query projectTemplateQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
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
    data: { sanityProject: data },
  } = props

  return (
    <Layout>
      <SEO title={data.title} article={true} description={data.SEOText} />
      <div>
        <h1>{data.title}</h1>
        <BlockContent blocks={data._rawBody} withAnchor></BlockContent>
      </div>
    </Layout>
  )
}

export default Component
