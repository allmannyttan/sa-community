import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../components/blockContent'
import * as Layout from '../components/layout'
import * as Typography from '../components/typography'
import TableOfContents from '../components/tableOfContents'
import SEO from '../components/seo'

const query = graphql`
  query sourceCode {
    sanitySiteSettings {
      keywords
      title
      description
    }

    sanitySourceCodePage {
      pageName
      _rawBody(resolveReferences: { maxDepth: 10 })
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
    <Layout.FlexWrapper>
      <SEO
        title={data.pageName || sanitySiteSettings.title}
        description={sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <Layout.Aside>
        <TableOfContents blocks={data._rawBody} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.pageName}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
