import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/blockContent'
import Layout from '../components/layout'
import TableOfContents from '../components/tableOfContents'

export const query = graphql`
  query projectTemplateQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
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
    data: { sanityProject: data },
  } = props

  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        {data.tableOfContents && <TableOfContents blocks={data._rawBody} />}
        <BlockContent blocks={data._rawBody} withAnchor></BlockContent>
      </div>
    </Layout>
  )
}

export default Component
