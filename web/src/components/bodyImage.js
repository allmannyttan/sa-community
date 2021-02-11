import React from 'react'
import Img from 'gatsby-image'

const Component = ({ ...props }) => {
  return (
    <div className="max-w-xl">
      <Img {...props} />
    </div>
  )
}

export default Component
