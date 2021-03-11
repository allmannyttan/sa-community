import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import { RiArrowDropRightLine } from 'react-icons/ri'
import * as utils from '../utils'

const query = graphql`
  query getAllPages {
    sanityHomePage {
      pageName
    }
    sanityApiPage {
      pageName
    }
    sanityProjectPage {
      pageName
    }
    sanitySourceCodePage {
      pageName
    }
    sanityCommunicationPage {
      pageName
    }
    sanityManifestPage {
      pageName
    }
    sanityNewsPage {
      pageName
    }
    sanityAboutUsPage {
      pageName
    }
  }
`

const BreadCrumbs = () => {
  const data = useStaticQuery(query)
  const routes = Object.entries(data).map(utils.getLinkPathFromPageData)
  const pathname = useLocation().pathname

  const parts = pathname
    .split('/')
    .filter(Boolean)
    .map((p, i, arr) => {
      let path = ''
      if (p === 'api' || p === 'project')
        path = routes.find((a) => a.path.includes('/' + p))
      if (i === 0 && p !== 'docs')
        path = routes.find((a) => a.path.includes('/' + p))
      return {
        name: path.pageName
          ? path.pageName
          : p
              .split('-')
              .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
              .join(' '),
        route: `/${arr.filter((_, i2) => i2 <= i).join('/')}`,
      }
    })

  return (
    <nav className="text-gray-500 flex items-center">
      {parts.map((part) => (
        <span className="flex items-center" key={part.name}>
          <Link
            to={part.route}
            className="text-sm tracking-wide  hover:text-purple-700 hover:underline"
          >
            {part.name}
          </Link>

          <span role="presentation">
            <RiArrowDropRightLine className="text-gray-400" size={20} />
          </span>
        </span>
      ))}
    </nav>
  )
}

export default BreadCrumbs
