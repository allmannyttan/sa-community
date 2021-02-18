import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../components/blockContent'
import * as Layout from '../components/layout/'
import * as Typography from '../components/typography'
import TableOfContents from '../components/tableOfContents'

const query = graphql`
  query sourceCode {
    sanitySourceCodePage {
      tableOfContents
      title
      _rawBody
    }
  }
`

const Component = () => {
  const data = useStaticQuery(query).sanitySourceCodePage
  if (!data) return <h1>Data saknas...</h1>

  return (
    <Layout.FlexWrapper>
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
