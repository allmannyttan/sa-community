import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import HeroBlock from '../components/heroBlock'
import SEO from '../components/seo'
import bg from '../images/bg.svg'
import * as Typography from '../components/typography'
import Img from 'gatsby-image'

const query = graphql`
  query homePageQuery {
    sanityHomePage {
      getStarted {
        cta
        heading
        content
        string
        icon {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
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
  console.log(data)
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
          {/* <HeroBlock heroImage={data.heroImage} heroText={data.heroText} /> */}
          <div className="max-w-screen-lg mx-auto">
            {/* <div className="radial-gradient">

            </div> */}
            <div className="mx-auto flex flex-col justify-center items-center md:mt-0 relative">
              <img src={bg}></img>
              <div className="z-10 text-center absolute md:px-8 overflow-hidden">
                <h2 className="text-5xl md:text-8xl font-bold">
                  Låt oss starta det här tillsammans
                </h2>
                <p>Var med och ta del av den nya verkligheten</p>
              </div>
            </div>

            <div className="my-16 grid grid-flow-row md:grid-flow-col py-8 row-auto justify-center gap-6 p-8 md:p-0">
              {data.getStarted.map((item) => (
                <div
                  key={item.heading}
                  className="max-w-xs grid grid-flow-row mb-10 md:mb-0"
                >
                  <div className="w-10 mb-3 md:mb-6 justify-self-center">
                    <Img fluid={item.icon.asset.fluid} />
                  </div>
                  <h3 className="text-2xl font-bold justify-self-center">
                    {item.heading}
                  </h3>
                  <p className="text-center">{item.content}</p>
                  <Link
                    className="bg-purple-300 rounded p-3 justify-self-center mt-8 self-end"
                    to={item.string}
                  >
                    {item.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div className="my-16 md:mb-32 md:mt-64  grid grid-flow-row md:grid-flow-col bg-purple-100 p-8 md:p-16 gap-4">
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
