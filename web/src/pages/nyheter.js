import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'

const query = graphql`
  query news {
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
  const data = useStaticQuery(query).allSanityNewsPost.edges.map(
    ({ node }) => node
  )

  return (
    <Layout>
      {data.map((newsPost) => (
        <Link key={newsPost.title} to={`${newsPost.slug.current}`}>
          <p>{newsPost.title}</p>
        </Link>
      ))}
    </Layout>
  )
}

export default Component
