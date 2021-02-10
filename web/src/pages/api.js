import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import BlockContent from '../components/blockContent'

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
  const data = useStaticQuery(query).allSanityApi.edges.map(({ node }) => node)
  const apiPage = useStaticQuery(query).sanityApiPage

  return (
    <Layout>
      <div
        className="text-white flex justify-center content-center"
        style={{
          backgroundImage: `url(${apiPage.heroImage.asset.url})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl">
          <h2 className="py-40 text-current text-4xl leading-tight tracking-wide">
            {apiPage.heroText}
          </h2>
        </div>
      </div>
      <BlockContent blocks={apiPage._rawBody} />

      {data.map((project) => (
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
