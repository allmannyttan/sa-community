import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
// import InlineIcon from './inline-icon'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 className="text-4xl font-bold my-2">{props.children}</h1>
        case 'h2':
          return <h2 className="text-2xl font-bold my-2">{props.children}</h2>
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
  <BaseBlockContent
    className="px-8"
    blocks={blocks}
    serializers={serializers}
  />
)

export default BlockContent
