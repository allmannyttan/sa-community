import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlockContent from '../../components/blockContent'
import SEO from '../../components/seo'

const query = graphql`
  query projectsPage {
    sanityProjectPage {
      _rawBody
      title
      keywords
    }
    allSanityProject {
      edges {
        node {
          id
          slug {
            current
          }
          title
          description
          _type
        }
      }
    }
    sanitySiteSettings {
      keywords
      title
      description
    }
  }
`

const Component = () => {
  const {
    sanityProjectPage: data,
    allSanityProject,
    sanitySiteSettings,
  } = useStaticQuery(query)
  const projects = allSanityProject.edges.map(({ node }) => node) || []

  if (!data && !Boolean(projects.length))
    return <h2 className="text-xl">Data saknas....</h2>

  return (
    <>
      <div>
        <SEO
          title={data.title || sanitySiteSettings.title}
          description={data.description || sanitySiteSettings.description}
          keywords={data.keywords || sanitySiteSettings.keywords}
        />
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
            <p className="text-gray-700">{project.description}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Component
