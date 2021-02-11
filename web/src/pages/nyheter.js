import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
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
    <>
      <div className="text-center my-8">
        <h2 className="text-xl">{data.title}</h2>
        <BlockContent className="text-center" blocks={data._rawBody} />
      </div>
      {posts.map((newsPost) => (
        <Link key={newsPost.title} to={`${newsPost.slug.current}`}>
          <p>{newsPost.title}</p>
        </Link>
      ))}
    </>
  )
}

export default Component
