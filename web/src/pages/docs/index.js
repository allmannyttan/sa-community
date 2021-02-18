import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import * as Layout from '../../components/layout/'
import * as Typography from '../../components/typography'
import ArticleSideMenu from '../../components/articleSideMenu'
import BlockContent from '../../components/blockContent'
import * as Links from '../../components/links'
const query = graphql`
  query docsInfo {
    sanityApiPage {
      title
      _rawBody
      keywords
    }

    sanityProjectPage {
      _rawBody
      title
      keywords
    }
  }
`
const Docs = () => {
  const { sanityProjectPage, sanityApiPage } = useStaticQuery(query)

  const apiPage = { ...sanityApiPage, slug: { current: 'api' } }
  const projectPage = { ...sanityProjectPage, slug: { current: 'project' } }

  return (
    <Layout.FlexWrapper>
      <Layout.Aside>
        <ArticleSideMenu posts={[apiPage, projectPage]} url={'docs'} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>Docs</Typography.H1>
        <div className="flex flex-col">
          <div className="my-3">
            <Links.Anchor slug="api">API:er</Links.Anchor>
            <BlockContent blocks={sanityApiPage._rawBody} />
          </div>
          <div className="my-3">
            <Links.Anchor slug={`project`}>Projekt</Links.Anchor>
            <BlockContent blocks={sanityProjectPage._rawBody} />
          </div>
        </div>
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Docs
