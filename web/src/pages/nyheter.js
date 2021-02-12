import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
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
  return (
    <Layout>
      <div className="text-center my-8">
        <h2 className="text-xl">{data.title}</h2>
        <BlockContent className="text-center" blocks={data._rawBody} />
      </div>
      {posts.map((newsPost) => (
        <Link key={newsPost.title} to={`${newsPost.slug.current}`}>
          <p>{newsPost.title}</p>
          <p className="text-gray-700">{newsPost.descriptionText}</p>
        </Link>
      ))}
    </Layout>
  )
}

export default Component
