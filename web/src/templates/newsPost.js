import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import * as Layout from '../components/layout/'
import * as Typography from '../components/typography'
import BlockContent from '../components/blockContent'
import AuthorImage from './../components/authorImage'
import { RiTimeLine } from 'react-icons/ri'
import * as utils from '../utils'
import NewsPosts from '../components/newsPosts'

export const query = graphql`
  query newsPostTemplateQuery($id: String!) {
    sanityNewsPost(id: { eq: $id }) {
      id
      slug {
        current
      }
      keywords
      title
      description
      datePicker
      author {
        name
        profileImage {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
    }

    allSanityNewsPost(sort: { order: DESC, fields: datePicker }) {
      edges {
        node {
          slug {
            current
          }
          title
          datePicker
        }
      }
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityNewsPost: data, allSanityNewsPost },
  } = props

  const posts = allSanityNewsPost.edges.map(({ node }) => node)

  const newsBeforeTomorrow = posts.filter((post) =>
    utils.isDateTodayOrBefore(post.datePicker)
  )
  return (
    <Layout.FlexWrapper>
      <SEO
        title={data.title}
        keywords={data.keywords}
        article={true}
        description={data.description}
      />
      <Layout.Aside>
        <NewsPosts posts={newsBeforeTomorrow} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.title}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
        {data.author && (
          <div className="mt-12">
            <div className="rounded-full">
              <AuthorImage
                fluid={data.author.profileImage.asset.fluid}
                alt={`Editor photo representing ${data.name}`}
                style={{ borderRadius: '50%' }}
              />
            </div>
            <p className="mt-2 font-semibold">{data.author.name}</p>
            <div className="flex items-end">
              <RiTimeLine className="text-gray-700" />
              <p className="text-xs italic ml-1 font-thin">
                {utils.dateToHumanReadable(data.datePicker)}
              </p>
            </div>
          </div>
        )}
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
