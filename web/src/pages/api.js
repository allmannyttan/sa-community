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
  console.log(apiPage)
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
          <p>{project.title}</p>
        </Link>
      ))}
    </Layout>
  )
}

export default Component
