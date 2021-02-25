import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../components/blockContent'
import SEO from '../components/seo'
import HeroBlock from '../components/heroBlock'
import * as Layout from '../components/layout/'

const query = graphql`
  query aboutUs {
    sanityAboutUsPage {
      pageName
      _rawBody(resolveReferences: { maxDepth: 10 })
      keywords
      heroText
      heroImage {
        alt
        asset {
          fluid(maxWidth: 1800, maxHeight: 500) {
            ...GatsbySanityImageFluid
          }
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
  const { sanityAboutUsPage: data, sanitySiteSettings } = useStaticQuery(query)
  if (!data) return <h1>Data saknas...</h1>

  return (
    <>
      <SEO
        title={data.pageName || sanitySiteSettings.title}
        description={data.description || sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <HeroBlock heroImage={data.heroImage} heroText={data.heroText} />
      <div className="flex justify-center">
        <Layout.Article>
          <BlockContent blocks={data._rawBody} />
        </Layout.Article>
      </div>
    </>
  )
}

export default Component
