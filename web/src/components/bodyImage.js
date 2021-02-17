import React from 'react'
import Img from 'gatsby-image'

const BodyImage = ({ ...props }) => (
  <div className="max-w-xl my-8">
    <Img {...props} />
  </div>
)

export default BodyImage
