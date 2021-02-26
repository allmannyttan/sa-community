import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import bg from '../images/bg.svg'
import Img from 'gatsby-image'
import * as Typography from '../components/typography'
import HeroText from '../components/heroText'

const query = graphql`
  query homePageQuery {
    sanityHomePage {
      keywords
      heroText {
        color {
          hex
        }
        text
      }
      description
      getStarted {
        cta
        heading
        content
        icon {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        sendTo {
          reference {
            ... on SanityApi {
              slug {
                current
              }
              _type
            }
            ... on SanityNewsPost {
              slug {
                current
              }
              _type
            }
            ... on SanityProject {
              slug {
                current
              }
              _type
            }
            ... on SanityCommunicationPage {
              _type
            }
            ... on SanityAboutUsPage {
              _type
            }
            ... on SanityApiPage {
              _type
            }
            ... on SanityNewsPage {
              _type
            }
            ... on SanityProjectPage {
              _type
            }
          }
        }
      }
      focusAreas {
        content
        heading
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
  const { sanityHomePage: data, sanitySiteSettings } = useStaticQuery(query)
  const seo = sanitySiteSettings || {}

  const getRouteFromReference = (reference) => {
    switch (reference._type) {
      case 'project':
        return `docs/project/${reference.slug.current}`
      case `newsPost`:
        return `news/${reference.slug.current}`
      case 'homePage':
        return ''
      case 'api':
        return `docs/api/${reference.slug.current}`
      case 'aboutUsPage':
        return 'about'
      case 'communicationPage':
        return 'communication'
      case 'newsPage':
        return 'news'
      case 'projectPage':
        return `docs/project`
      case 'sourceCodePage':
        return 'source-code'
      case 'apiPage':
        return 'docs/api'
      default:
        return
    }
  }

  return (
    <>
      <SEO
        title={seo.title || ''}
        description={seo.description}
        keywords={data.keywords || seo.keywords}
      />
      {!data && <h1>Data saknas...</h1>}

      {data && (
        <div className="px-8">
          <div className="max-w-screen-lg mx-auto">
            <div className="mx-auto mt-12 flex flex-col justify-center items-center md:mt-0 relative h-300 md:h-500 md:w-500 w-full">
              <img
                className="absolute inset-y-0 w-full h-full"
                style={{ zIndex: -1 }}
                src={bg}
                alt="presentational radial gradient"
              />

              <div className="z-10 text-center md:px-8 flex flex-col items-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                <HeroText data={data.heroText} />
              </div>
            </div>

            <div className="mt-0 md:mt-8 grid grid-flow-row md:grid-flow-col justify-items-center py-8 row-auto gap-6 md:p-0">
              {(data.getStarted || []).map((item) => {
                if (!item.sendTo) {
                  return null
                }

                return (
                  <div
                    key={item.heading}
                    className="max-w-xs grid mb-12 md:mb-0 justify-items-center text-center items-center"
                    style={{
                      gridTemplateRows: '50px 40px 1fr 1fr',
                    }}
                  >
                    {item.icon && (
                      <div className="w-10">
                        <Img fluid={item.icon.asset.fluid} />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold">{item.heading}</h3>
                    <Typography.Description>
                      {item.content}
                    </Typography.Description>

                    <Link
                      className="shadow-lg bg-purple-200 hover:bg-purple-100 font-medium rounded-lg py-3 px-5 mt-4"
                      to={getRouteFromReference(item.sendTo.reference) || '/'}
                    >
                      {item.cta}
                    </Link>
                  </div>
                )
              })}
            </div>

            {Boolean(data.focusAreas.length) && (
              <div className="px-8 py-12 my-16 md:p-24 md:mt-40 justify-items-center md:justify-items-start text-center md:text-left gap-16 grid grid-flow-row border-dashed border border-saGreen md:grid-cols-3 rounded-lg">
                {data.focusAreas.map((focusArea) => (
                  <div key={focusArea.heading} className="max-w-xs">
                    <h3 className="text-lg font-bold">{focusArea.heading}</h3>
                    <Typography.Description>
                      {focusArea.content}
                    </Typography.Description>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Component
