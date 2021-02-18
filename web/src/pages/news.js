import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as Layout from '../components/layout/'
import * as Typography from '../components/typography'
import BlockContent from '../components/blockContent'

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
        {posts.map((item) => (
          <Link key={item.title} to={`${item.slug.current}`}>
            <p>{item.title}</p>
          </Link>
        ))}
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.title}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
