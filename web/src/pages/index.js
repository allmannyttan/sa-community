import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const query = graphql`
  query projects {
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
  console.log(data)
  return (
    <main>
      {data.map((project) => (
        <Link
          key={project.title}
          to={`${project._type}/${project.slug.current}`}
        >
          <p>{project.title}</p>
        </Link>
      ))}
    </main>
  )
}

export default Component
