import React from 'react'
import Img from 'gatsby-image'

const Component = ({ data }) => {
  return (
    <Img
      fluid={data.asset.fluid}
      alt={data.alt}
      style={{ maxHeight: 500, height: '100%' }}
    />
  )
}
export default Component
