import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../components/blockContent'
import SEO from '../components/seo'
import HeroBlock from '../components/heroBlock'
import * as Layout from '../components/layout'
import partners from '../../public/partners.json'
import { H3 } from '../components/typography'

const query = graphql`
  query aboutUs {
    sanityAboutUsPage {
      pageName
      _rawBody(resolveReferences: { maxDepth: 10 })
      keywords
      heroText {
        color {
          hex
        }
        text
      }
      heroImage {
        alt
        asset {
          fluid(maxWidth: 1800) {
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
    <div className="text-3xl md:text-4xl lg:text-5xl">
      <SEO
        title={data.pageName || sanitySiteSettings.title}
        description={data.description || sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <HeroBlock heroImage={data.heroImage} heroText={data.heroText} />
      <div className="flex justify-center">
        <Layout.NoArticle>
          <BlockContent blocks={data._rawBody} />
        </Layout.NoArticle>
      </div>
      <div className="mx-10 flex flex-col mt-10">
        <H3 additionalClassnames="self-center mb-10">Vi som står bakom</H3>
        <section className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((item, i) => (
            <a href={item.href} target="_blank" key={i}>
              <img alt={item.alt} src={item.src} width={item.width} />
            </a>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Component
