import React from 'react'
import Img from 'gatsby-image'

const Component = ({ data }) => <Img fluid={data.asset.fluid} alt={data.alt} />

export default Component
