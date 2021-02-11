import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import BlockContent from '../components/blockContent'
import SEO from '../components/seo'

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
        _key
        _type
        alt
        asset {
          url
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
      <SEO />
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
      <BlockContent blocks={data._rawBody} />

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
