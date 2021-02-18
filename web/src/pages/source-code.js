import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../components/blockContent'
import SEO from '../components/seo'

const query = graphql`
  query sourceCode {
    sanitySiteSettings {
      keywords
      title
      description
    }

    sanitySourceCodePage {
      title
      _rawBody
    }
  }
`

const Component = () => {
  const {
    sanitySourceCodePage: data,
    sanitySiteSettings = {},
  } = useStaticQuery(query)
  if (!data) return <h1>Data saknas...</h1>

  return (
    <>
      <SEO
        title={data.title || sanitySiteSettings.title}
        description={sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <h2 className="text-xl text-center my-8">{data.title}</h2>
      {data._rawBody && <BlockContent blocks={data._rawBody} />}
    </>
  )
}

export default Component
