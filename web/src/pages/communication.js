import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../components/blockContent'
import HeroBlock from '../components/heroBlock'
import SEO from '../components/seo'
import * as Layout from '../components/layout'

const query = graphql`
  query communication {
    sanityCommunicationPage {
      linkCard {
        heading
        content
        link
      }
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
          <div className="flex justify-around w-full">
            {data.linkCard.map((card) => {
              console.log(card)
              return (
                <a href={card.link}>
                  <div className="border-2 border-gray-100 p-3 w-52 h-32 flex flex-col justify-center">
                    <p className="text-lg text-saPurple font-bold text-center">
                      {card.heading}
                    </p>
                    <p className="text-sm text-center text-gray-700">
                      {card.content}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </Layout.NoArticle>
      </div>
    </div>
  )
}

export default Component
