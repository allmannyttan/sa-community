import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlockContent from '../../components/blockContent'
import * as Typography from '../../components/typography'

const query = graphql`
  query api {
    allSanityApi {
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
    sanityApiPage {
      heroImage {
        alt
        asset {
          fluid(maxWidth: 1800, maxHeight: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroText
      _rawBody
    }
  }
`

const Component = () => {
  const { sanityApiPage: data, allSanityApi } = useStaticQuery(query)
  const apis = allSanityApi.edges.map(({ node }) => node) || []

  if (!data && !Boolean(apis.length))
    return <h2 className="text-xl">Data saknas....</h2>
  console.log(data)
  return (
    <>
      <div className="px-4 pt-12 grid grid-cols-8">
        {data && (
          <>
            <h2 className="text-xl">{data.title}</h2>
            <BlockContent className="text-center" blocks={data._rawBody} />
          </>
        )}
        <div className="col-span-2 max-w-xs">
          {apis.map((project) => (
            <Link key={project.title} to={`${project.slug.current}`}>
              <div className="m-4 p-2 border-b-2">
                <Typography.H3>{project.title}</Typography.H3>
                <p className="text-gray-700">{project.descriptionText}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Component
