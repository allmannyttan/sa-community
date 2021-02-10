import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'

const query = graphql`
  query projects {
    sanityProjectPage {
      _rawBody
      title
    }
    allSanityProject {
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
  const data = useStaticQuery(query).allSanityProject.edges.map(
    ({ node }) => node
  )

  return (
    <Layout>
      {data.map((project) => (
        <Link key={project.title} to={`${project.slug.current}`}>
          <p>{project.title}</p>
        </Link>
      ))}
    </Layout>
  )
}

export default Component
