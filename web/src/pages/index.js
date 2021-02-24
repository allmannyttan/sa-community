import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import bg from '../images/bg.svg'
import Img from 'gatsby-image'
import * as Typography from '../components/typography'

const query = graphql`
  query homePageQuery {
    sanityHomePage {
      keywords
      title
      description
      getStarted {
        cta
        heading
        content
        url
        icon {
          asset {
            fluid {
              ...GatsbySanityImageFluid
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
          <div className="max-w-screen-lg mx-auto">
            <div className="mx-auto flex flex-col justify-center items-center md:mt-0 relative">
              <img src={bg}></img>
              <div className="z-10 text-center absolute md:px-8 flex flex-col items-center">
                <h2 className="text-4xl md:text-8xl font-bold mb-4">
                  {data.title}
                </h2>
                <Typography.DescriptionParagraph>
                  {data.description}
                </Typography.DescriptionParagraph>
              </div>
            </div>

            <div className="my-16 grid grid-flow-row md:grid-flow-col py-8 row-auto gap-6 p-8 md:p-0">
              {data.getStarted.map((item) => (
                <div
                  key={item.heading}
                  className="max-w-xs grid grid-flow-row mb-10 md:mb-0 justify-items-center text-center"
                >
                  <div className="w-10 mb-3 md:mb-6 ">
                    <Img fluid={item.icon.asset.fluid} />
                  </div>
                  <h3 className="text-2xl font-bold ">{item.heading}</h3>
                  <Typography.DescriptionParagraph>
                    {item.content}
                  </Typography.DescriptionParagraph>
                  <Link
                    className="bg-purple-300 hover:bg-purple-200 rounded p-3 mt-8 self-end"
                    to={item.url}
                  >
                    {item.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div className="my-16 md:mb-32 md:mt-64 grid grid-flow-row md:grid-flow-col bg-purple-100 p-8 md:p-16 gap-4">
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
