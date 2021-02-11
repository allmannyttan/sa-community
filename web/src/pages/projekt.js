import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import BlockContent from '../components/blockContent'

const query = graphql`
  query projectsPage {
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
  const { sanityProjectPage: data, allSanityProject } = useStaticQuery(query)
  const projects = allSanityProject.edges.map(({ node }) => node) || []

  return (
    <Layout>
      <div className="text-center my-8">
        <h2 className="text-xl">{data.title}</h2>
        <BlockContent className="text-center" blocks={data._rawBody} />
      </div>
      {projects.map((project) => (
        <Link key={project.title} to={`${project.slug.current}`}>
          <p>{project.title}</p>
        </Link>
      ))}
    </Layout>
  )
}

export default Component
