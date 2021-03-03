import React from 'react'
import Img from 'gatsby-image'

const BodyImage = ({ ...props }) => (
  <div className="max-w-4xl my-12">
    <Img {...props} />
  </div>
)

export default BodyImage
