import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import BlockContent from '../components/blockContent'

const query = graphql`
  query aboutUs {
    sanityAboutUs {
      title
      _rawRichText
    }
  }
`

const Component = () => {
  const data = useStaticQuery(query).sanityAboutUs

  return (
    <Layout>
      <>
        <h2 className="text-xl text-center">{data.title}</h2>
        <BlockContent blocks={data._rawRichText} />
      </>
    </Layout>
  )
}

export default Component
