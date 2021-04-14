import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as Layout from '../components/layout/'
import * as Typography from '../components/typography'
import BlockContent from '../components/blockContent'
import SEO from '../components/seo'
import * as Links from '../components/links'
import { RiTimeLine } from 'react-icons/ri'
import * as utils from '../utils'
import NewsPosts from '../components/newsPosts'

const query = graphql`
  query newsPage {
    sanitySiteSettings {
      keywords
      title
      description
    }
    sanityNewsPage {
      _rawBody(resolveReferences: { maxDepth: 10 })
      pageName
    }
    allSanityNewsPost(sort: { order: ASC, fields: datePicker }) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          datePicker
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
  console.log(allSanityNewsPost)
  return (
    <Layout.FlexWrapper>
      <SEO
        title={data.pageName || sanitySiteSettings.title}
        description={sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <Layout.Aside>
        <NewsPosts posts={posts} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.pageName}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />

        {Boolean(posts.length) && (
          <div className="mt-16">
            {posts.map((item) => (
              <div className="mb-8 group font-semibold" key={item.title}>
                <Links.Basic to={item.slug.current}>{item.title}</Links.Basic>
                <Typography.Description>
                  {item.description}
                </Typography.Description>
                <div className="flex items-end mt-1">
                  <RiTimeLine className="text-gray-700 group-hover:text-black" />
                  <p className="text-xs italic ml-1 font-thin  text-gray-700 group-hover:text-black">
                    <p>eheje</p>
                    {utils.dateToHumanReadable(item.datePicker)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
