import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlockContent from '../components/blockContent'
import SEO from '../components/seo'

const query = graphql`
  query newsPage {
    sanitySiteSettings {
      keywords
      title
      description
    }
    sanityNewsPage {
      _rawBody
      title
    }
    allSanityNewsPost {
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
  }
`

const Component = () => {
  const {
    sanityNewsPage: data,
    allSanityNewsPost,
    sanitySiteSettings = {},
  } = useStaticQuery(query)
  const posts = allSanityNewsPost.edges.map(({ node }) => node)

  if (!data && !Boolean(posts.length))
    return <h2 className="text-xl">Data saknas....</h2>

  return (
    <>
      <SEO
        title={data.title || sanitySiteSettings.title}
        description={sanitySiteSettings.description}
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
      {posts.map((newsPost) => (
        <Link key={newsPost.title} to={`${newsPost.slug.current}`}>
          <p>{newsPost.title}</p>
          <p className="text-gray-700">{newsPost.description}</p>
        </Link>
      ))}
    </>
  )
}

export default Component
