import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlockContent from '../../components/blockContent'
import SEO from '../../components/seo'
import ArticleSideMenu from '../../components/articleSideMenu'
import * as Typography from '../../components/typography'
import * as Layout from '../../components/layout/'

const query = graphql`
  query projectsPage {
    sanityProjectPage {
      _rawBody
      title
      keywords
    }
    allSanityProject {
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
        title={data.title || sanitySiteSettings.title}
        description={data.description || sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <Layout.Aside>
        <ArticleSideMenu
          title={'PROJECT'}
          posts={projects}
          url={'docs/project'}
        />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.title}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
        {projects.map((item) => (
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
