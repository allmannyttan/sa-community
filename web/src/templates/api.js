import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import TableOfContents from '../components/tableOfContents'
import BlockContent from '../components/blockContent'
import * as Layout from '../components/layout/'
import * as Typography from '../components/typography'

export const query = graphql`
  query sanityApi($id: String!) {
    sanityApi(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      description
      keywords
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
    <Layout.FlexWrapper>
      <SEO
        title={data.title}
        keywords={data.keywords}
        article={true}
        description={data.description}
      />
      <Layout.Aside>
        <TableOfContents blocks={data._rawBody} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.title}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
