import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import SyntaxHighlighter from './syntaxHighlight'
import YouTube from 'react-youtube'
import { Link } from 'gatsby'

import * as Serializers from './serializers'

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

const serializers = (withAnchor) => ({
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case 'h1':
          return (
            <Serializers.H1 withAnchor={withAnchor}>{children}</Serializers.H1>
          )
        case 'h2':
          return (
            <Serializers.H2 withAnchor={withAnchor}>{children}</Serializers.H2>
          )
        case 'h3':
          return (
            <Serializers.H3 withAnchor={withAnchor}>{children}</Serializers.H3>
          )
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
})

const BlockContent = ({ blocks, withAnchor = false }) => (
  <BaseBlockContent
    className="px-8"
    blocks={blocks}
    serializers={serializers(withAnchor)}
  />
)

export default BlockContent
