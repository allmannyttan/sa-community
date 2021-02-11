import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import BlockContent from '../components/blockContent'
import HeroImage from '../components/heroImage'
import * as Typography from '../components/typography'

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

  return (
    <Layout>
      <div>
        {data.heroImage && <HeroImage data={data.heroImage} />}
        {!data.heroImage && (
          <div className="bg-gray-100 w-full h-48">
            <Typography.H1>{data.heroText}</Typography.H1>
          </div>
        )}
      </div>
      <div
        className="text-white flex justify-center content-center"
        style={{
          backgroundImage: `url(${data.heroImage.asset.url})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl">
          <h2 className="py-40 text-current text-4xl leading-tight tracking-wide">
            {data.heroText}
          </h2>
        </div>
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
    </Layout>
  )
}

export default Component
