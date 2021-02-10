import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import SyntaxHighlighter from './syntaxHighlight'
import YouTube from 'react-youtube'
import { Link } from 'gatsby'

const getRouteNameFromContentType = (contentType) => {
  switch (contentType) {
    case 'newsPost':
      return 'nyheter'
    case 'project':
      return 'projekt'
    case 'api':
      return 'api'
    default:
      return '404'
  }
}

const getRouteNameFromPageType = (contentType) => {
  switch (contentType) {
    case 'homePage':
      return ''
    case 'aboutUsPage':
      return 'om-oss'
    case 'communicationPage':
      return 'kommunikation'
    case 'apiPage':
      return 'api'
    default:
      return '404'
  }
}

const serializers = {
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case 'h1':
          return <h1 className="text-4xl font-bold my-2">{children}</h1>
        case 'h2':
          return <h2 className="text-2xl font-bold my-2">{children}</h2>
        case 'normal':
          return <p>{children}</p>
        default:
          console.warn('Unhandled in portable text serializer: ', node)
          return <p></p>
      }
    },
    bodyImage: ({ node }) => {
      return <img src={node.asset.url} alt={node.alt}></img>
    },
    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return <YouTube videoId={id} />
    },
    code: ({ node }) => (
      <SyntaxHighlighter code={node.code} language={node.language} />
    ),
  },

  marks: {
    link: ({ mark, children }) =>
      mark.blank ? (
        <a
          className="text-red-800"
          href={mark.href}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <a className="text-red-800" href={mark.href}>
          {children}
        </a>
      ),
    internalLink: ({ mark, children }) => {
      if (!mark.reference) {
        return null
      }

      if (mark.reference._type.includes('Page')) {
        const url = `/${getRouteNameFromPageType(mark.reference._type)}`

        return (
          <Link className="text-red-800" to={url}>
            {children}
          </Link>
        )
      }

      const url = `/${getRouteNameFromContentType(mark.reference._type)}/${
        mark.reference.slug.current
      }`

      return (
        <Link className="text-red-800" to={url}>
          {children}
        </Link>
      )
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent
    className="px-8"
    blocks={blocks}
    serializers={serializers}
  />
)

export default BlockContent
