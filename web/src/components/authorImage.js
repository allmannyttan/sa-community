import React from 'react'
import Img from 'gatsby-image'

const AuthorImage = ({ ...props }) => (
  <div className="w-16 rounded-full">
    <Img {...props} />
  </div>
)

export default AuthorImage
