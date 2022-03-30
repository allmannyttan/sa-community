import React from 'react'

import HeroImage from './heroImage'
import HeroText from './heroText'

const Component = ({ heroImage, heroText }) => {
  const image = heroImage || {}
  if (!image.asset && !heroText) return null
  if (!image.asset && heroText)
    return (
      <div className="flex items-center justify-center bg-saLightGrey w-full h-48">
        <HeroText data={heroText} />
      </div>
    )

  if (image.asset && !heroText)
    return (
      <div className="relative w-full">
        <div className="relative inset-0">
          <div className="h-80">
            <HeroImage data={image} />
          </div>
        </div>
      </div>
    )

  return (
    <div className="relative w-full">
      <div className="relative h-40 sm:h-96 inset-0">
        <HeroImage data={image} />
      </div>

      <div className="absolute w-full inset-0 flex items-center justify-center">
        <HeroText data={heroText} />
      </div>
    </div>
  )
}

export default Component
