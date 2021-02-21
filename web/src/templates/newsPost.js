import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import * as Layout from '../components/layout/'
import * as Typography from '../components/typography'
import ArticleSideMenu from '../components/articleSideMenu'
import BlockContent from '../components/blockContent'

export const query = graphql`
  query newsPostTemplateQuery($id: String!) {
    sanityNewsPost(id: { eq: $id }) {
      id
      slug {
        current
      }
      keywords
      title
      description
      author {
        name
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
    allSanityNewsPost {
      edges {
        node {
          slug {
            current
          }
          title
        }
      }
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityNewsPost: data, allSanityNewsPost },
  } = props

  const posts = allSanityNewsPost.edges.map(({ node }) => node)

  return (
    <Layout.FlexWrapper>
      <SEO
        title={data.title}
        keywords={data.keywords}
        article={true}
        description={data.description}
      />
      <Layout.Aside>
        <ArticleSideMenu title={'Nyheter'} posts={posts} url={'news'} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.title}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
