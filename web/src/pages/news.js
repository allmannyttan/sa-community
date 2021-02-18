import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as Layout from '../components/layout/'
import * as Typography from '../components/typography'
import BlockContent from '../components/blockContent'
import ArticleSideMenu from '../components/articleSideMenu'

const query = graphql`
  query newsPage {
    sanityNewsPage {
      _rawBody
      title
    }
    allSanityNewsPost {
      edges {
        node {
          id
          slug {
            current
          }
          title
          descriptionText
          _type
        }
      }
    }
  }
`

const Component = () => {
  const { sanityNewsPage: data, allSanityNewsPost } = useStaticQuery(query)
  const posts = allSanityNewsPost.edges.map(({ node }) => node)

  if (!data && !Boolean(posts.length))
    return <h2 className="text-xl">Data saknas....</h2>

  return (
    <Layout.FlexWrapper>
      <Layout.Aside>
        <ArticleSideMenu title={'NYHETER'} posts={posts} url={'news'} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.title}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
        {posts.map((item) => (
          <div className="my-3">
            <Link
              key={item.title}
              to={`${item.slug.current}`}
              className="text-saGreen underline font-normal text-lg"
            >
              {item.title}
            </Link>
            <Typography.DescriptionParagraph>
              {item.descriptionText}
            </Typography.DescriptionParagraph>
          </div>
        ))}
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
