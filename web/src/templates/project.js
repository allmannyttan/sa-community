import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/blockContent'
import Layout from '../components/layout'

export const query = graphql`
  query projectTemplateQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      _type
      _rawRichText(resolveReferences: { maxDepth: 10 })
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityProject: data },
  } = props

  console.log(data)
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
