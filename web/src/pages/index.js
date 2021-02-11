import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeroImage from '../components/heroImage'
import HeroBlock from '../components/heroBlock'
import * as Typography from '../components/typography'

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
    }
  }
`
const Component = () => {
  const data = useStaticQuery(query).sanityHomePage
  if (!data) return <h1>Data saknas...</h1>

  return (
    <div>
      <div>
        <HeroBlock heroImage={data.heroImage} heroText={data.heroText} />
      </div>

      <div className="max-w-screen-lg mx-auto">
        <div className="mt-16 grid grid-flow-col py-8 gap-12">
          {data.focusAreas.map((focusArea) => (
            <div key={focusArea.heading} className="max-w-xs">
              <h3 className="text-lg font-bold">{focusArea.heading}</h3>
              <p>{focusArea.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Component
