import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import BlockContent from '../components/blockContent'

const query = graphql`
  query aboutUs {
    sanityAboutUsPage {
      title
      _rawRichText
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
        <BlockContent blocks={data._rawRichText} />
      </>
    </Layout>
  )
}

export default Component
