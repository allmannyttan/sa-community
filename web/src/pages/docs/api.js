import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlockContent from '../../components/blockContent'
import * as Typography from '../../components/typography'
import * as Layout from '../../components/layout/'

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
      title
      _rawBody
    }
  }
`

const Component = () => {
  const { sanityApiPage: data, allSanityApi } = useStaticQuery(query)
  const apis = allSanityApi.edges.map(({ node }) => node) || []

  if (!data && !Boolean(apis.length))
    return <h2 className="text-xl">Data saknas....</h2>
  return (
    <Layout.FlexWrapper>
      <Layout.Aside>
        {apis.map((item) => (
          <Link key={item.title} to={`${item.slug.current}`}>
            <p>{item.title}</p>
          </Link>
        ))}
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.title}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
        {apis.map((item, i) => (
          <div className="my-3" key={item.title}>
            <Link
              to={`${item.slug.current}`}
              className="text-saGreen underline font-normal text-lg"
            >
              {item.title}
            </Link>
            <Typography.DescriptionParagraph>
              {item.descriptionText}
            </Typography.DescriptionParagraph>
          </div>
        ))}
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
