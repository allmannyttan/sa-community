import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../components/blockContent'

const query = graphql`
  query communication {
    sanityCommunicationPage {
      title
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`

const Component = () => {
  const data = useStaticQuery(query).sanityCommunicationPage
  if (!data) return <h1>Data saknas...</h1>

  return (
    <>
      <h2 className="text-xl text-center my-8">{data.title}</h2>
      <BlockContent blocks={data._rawBody} />
    </>
  )
}

export default Component
