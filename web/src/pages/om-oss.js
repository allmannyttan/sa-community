import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import BlockContent from '../components/BlockContent'

const query = graphql`
  query aboutUs {
    sanityAboutUsPage {
      title
      _rawBody
    }
  }
`

const Component = () => {
  const data = useStaticQuery(query).sanityAboutUsPage
  if (!data) return <h1>Data saknas...</h1>

  return (
    <Layout>
      <>
        <h2 className="text-xl text-center my-8">{data.title}</h2>
        <BlockContent blocks={data._rawBody} />
      </>
    </Layout>
  )
}

export default Component
