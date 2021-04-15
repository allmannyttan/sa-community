import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import * as Layout from '../components/layout/'
import * as Typography from '../components/typography'
import BlockContent from '../components/blockContent'
import ArticleSideMenu from '../components/articleSideMenu'

export const query = graphql`
  query projectTemplateQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      description
      keywords
      _type
      _rawBody(resolveReferences: { maxDepth: 10 })
    }

    allSanityProject(sort: { order: ASC, fields: _createdAt }) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          description
          _type
          order
        }
      }
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityProject: data, allSanityProject },
  } = props

  const projects = allSanityProject.edges.map(({ node }) => node)

  projects.sort((a, b) => a.order - b.order)
  return (
    <Layout.FlexWrapper>
      <SEO
        title={data.title}
        keywords={data.keywords}
        article={true}
        description={data.description}
      />
      <Layout.Aside>
        <ArticleSideMenu
          title={'Projekt'}
          posts={projects}
          url={'docs/project'}
        />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.title}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
