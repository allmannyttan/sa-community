import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlockContent from '../../components/blockContent'
import * as hooks from '../../hooks'

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
          descriptionText
          _type
        }
      }
    }
  }
`

const Component = ({ location }) => {
  const breadCrumbs = hooks.useBreadCrumbs(location.pathname)
  const { sanityProjectPage: data, allSanityProject } = useStaticQuery(query)
  const projects = allSanityProject.edges.map(({ node }) => node) || []

  if (!data && !Boolean(projects.length))
    return <h2 className="text-xl">Data saknas....</h2>

  return (
    <>
      <div className="text-center my-8">
        {data && (
          <>
            <h2 className="text-xl">{data.title}</h2>
            <BlockContent className="text-center" blocks={data._rawBody} />
          </>
        )}
      </div>
      {projects.map((project) => (
        <Link key={project.title} to={`${project.slug.current}`}>
          <p>{project.title}</p>
          <p className="text-gray-700">{project.descriptionText}</p>
        </Link>
      ))}
    </>
  )
}

export default Component
