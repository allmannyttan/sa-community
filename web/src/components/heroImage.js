import React from 'react'
import Img from 'gatsby-image'

const Component = ({ data, height = 500 }) => (
  <Img fluid={data.asset.fluid} alt={data.alt} style={{ maxHeight: 500 }}></Img>
)

export default Component
