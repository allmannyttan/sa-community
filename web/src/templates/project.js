import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import * as Layout from '../components/layout/'
import * as Typography from '../components/typography'
import TableOfContents from '../components/tableOfContents'
import BlockContent from '../components/blockContent'

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
    <Layout.FlexWrapper>
      <SEO
        title={sanityProject.title}
        keywords={sanityProject.keywords}
        article={true}
        description={sanityProject.description}
      />
      <Layout.Aside>
        <TableOfContents blocks={sanityProject._rawBody} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{sanityProject.title}</Typography.H1>
        <BlockContent blocks={sanityProject._rawBody} withAnchor={true} />
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
