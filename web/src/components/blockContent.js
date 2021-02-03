import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
// import InlineIcon from './inline-icon'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>
        case 'normal':
          return <p>{props.children}</p>

        // ...

        default:
          console.log('this is not handled: ', props)
          return <p></p>
      }
    },
    blockImage(props) {
      console.log('tis is image: ', props)
      return <img src={props.node.asset.url} alt={props.node.alt}></img>
    },
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
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
