import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../components/blockContent'
import HeroBlock from '../components/heroBlock'
import SEO from '../components/seo'
import * as Layout from '../components/layout'

const query = graphql`
  query communication {
    sanityCommunicationPage {
      heroText {
        color {
          hex
        }
        text
      }
      heroImage {
        alt
        asset {
          fluid(maxWidth: 1800, maxHeight: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      pageName
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
    sanitySiteSettings {
      keywords
      title
      description
    }
  }
`

const Component = () => {
  const { sanityCommunicationPage: data, sanitySiteSettings } = useStaticQuery(
    query
  )

  if (!data) return <h1>Data saknas...</h1>
  console.log(data._rawBody)
  return (
    <div className="text-3xl md:text-4xl lg:text-5xl">
      <SEO
        title={data.pageName || sanitySiteSettings.title}
        description={data.description || sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <HeroBlock heroImage={data.heroImage} heroText={data.heroText} />
      <div className="flex justify-center">
        <Layout.NoArticle>
          {data._rawBody && <BlockContent blocks={data._rawBody} />}
        </Layout.NoArticle>
      </div>
    </div>
  )
}

export default Component
