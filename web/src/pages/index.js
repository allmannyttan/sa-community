import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const query = graphql`
  query homePageQuery {
    sanityHomePage {
      heroImage {
        _key
        _type
        alt
        asset {
          url
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

  return (
    <Layout>
      <div>
        <div
          className="text-white flex justify-center content-center"
          style={{
            backgroundImage: `url(${data.heroImage.asset.url})`,
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-3xl">
            <h2 className="py-40 text-current text-4xl leading-tight tracking-wide">
              {data.heroText}
            </h2>
          </div>
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
    </Layout>
  )
}

export default Component
