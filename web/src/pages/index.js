import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeroBlock from '../components/heroBlock'
import SEO from '../components/seo'

const query = graphql`
  query homePageQuery {
    sanityHomePage {
      heroImage {
        alt
        asset {
          fluid(maxWidth: 1800, maxHeight: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroText
      focusAreas {
        heading
        content
      }
      keywords
    }
    sanitySiteSettings {
      keywords
      title
      description
    }
  }
`
const Component = () => {
  const { sanityHomePage: data, sanitySiteSettings } = useStaticQuery(query)
  const seo = sanitySiteSettings || {}

  return (
    <>
      <SEO
        title={seo.title || ''}
        description={seo.description}
        keywords={data.keywords || seo.keywords}
      />
      {!data && <h1>Data saknas...</h1>}
      {data && (
        <>
          <HeroBlock heroImage={data.heroImage} heroText={data.heroText} />
          <div className="max-w-screen-lg mx-auto">
            <div className="mt-16 grid grid-flow-col py-8">
              {data.focusAreas.map((focusArea) => (
                <div key={focusArea.heading} className="max-w-xs">
                  <h3 className="text-lg font-bold">{focusArea.heading}</h3>
                  <p>{focusArea.content}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Component
