import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import SyntaxHighlighter from './syntaxHighlighter'
import YouTube from 'react-youtube'

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

        // ...

        default:
          console.log('this is not handled: ', node)
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
    inlineicon(props) {
      // switch (props.mark._type) {
      //   case 'inlineicon':
      //     if (props.mark.asset) {
      //       return (
      //         <InlineIcon
      //           src={props.mark.asset.url || ''}
      //           alt={props.children[0]}
      //         />
      //       )
      //     } else {
      //       return null
      //     }
      // }
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
