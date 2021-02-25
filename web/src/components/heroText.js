import React from 'react'

const HeroText = ({ data }) => {
  return (
    <h1
      className="text-current font-bold"
      style={{ color: data.color ? data.color.hex : 'black' }}
    >
      {data.text}
    </h1>
  )
}

export default HeroText
