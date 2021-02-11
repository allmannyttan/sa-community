import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlockContent from '../components/blockContent'
import HeroBlock from '../components/heroBlock'

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
          fluid(maxWidth: 1800, maxHeight: 700) {
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

  return (
    <>
      <div>
        <HeroBlock heroImage={data.heroImage} heroText={data.heroText} />
      </div>

      <div className="flex justify-center">
        <BlockContent blocks={data._rawBody} />
      </div>

      {apis.map((project) => (
        <Link key={project.title} to={`${project.slug.current}`}>
          <div className="m-4 p-2 border-b-2">
            <h3 className="text-xl underline">{project.title}</h3>
            <p className="text-gray-700">{project.descriptionText}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Component
