import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../../components/blockContent'
import SEO from '../../components/seo'
import ArticleSideMenu from '../../components/articleSideMenu'
import * as Typography from '../../components/typography'
import * as Layout from '../../components/layout/'
import * as Links from '../../components/links'

const query = graphql`
  query projectsPage {
    sanityProjectPage {
      _rawBody
      pageName
      keywords
    }
    allSanityProject(sort: { order: DESC, fields: _createdAt }) {
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
    sanitySiteSettings {
      keywords
      title
      description
    }
  }
`

const Component = () => {
  const {
    sanityProjectPage: data,
    allSanityProject,
    sanitySiteSettings,
  } = useStaticQuery(query)
  const projects = allSanityProject.edges.map(({ node }) => node) || []

  if (!data && !Boolean(projects.length))
    return <h2 className="text-xl">Data saknas....</h2>
  return (
    <Layout.FlexWrapper>
      <SEO
        title={data.pageName || sanitySiteSettings.title}
        description={data.description || sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <Layout.Aside>
        <ArticleSideMenu
          title={'Projekt'}
          posts={projects}
          url={'docs/project'}
        />
      </Layout.Aside>

      <Layout.Article>
        <Typography.H1>{data.pageName}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
        {Boolean(projects.length) && (
          <div className="mt-6">
            {projects.map((item) => (
              <div className="mb-8 group font-semibold" key={item.title}>
                <Links.Basic to={item.slug.current}>{item.title}</Links.Basic>
                <Typography.Description>
                  {item.description}
                </Typography.Description>
              </div>
            ))}
          </div>
        )}
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
