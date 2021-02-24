import React from 'react'
import * as Typography from '../components/typography'
import HeroImage from './heroImage'

const Component = ({ heroImage, heroText }) => {
  const image = heroImage || {}
  if (!image.asset && !heroText) return null
  if (!image.asset && heroText)
    return (
      <div className="flex items-center justify-center bg-gray-100 w-full h-48">
        <Typography.H1>{heroText}</Typography.H1>
      </div>
    )

  if (!image.asset && heroText) return <HeroImage data={image} />

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
      <div className="relative h-40 sm:h-80 inset-0 ">
        <HeroImage data={image} />
      </div>

      <div className="absolute w-full inset-0 flex items-center justify-center text-white ">
        <Typography.H1>{heroText}</Typography.H1>
      </div>
    </div>
  )
}

export default Component
