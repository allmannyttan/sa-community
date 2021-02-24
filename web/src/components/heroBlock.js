import React from 'react'
import * as Typography from '../components/typography'
import HeroImage from './heroImage'

const Component = ({ heroImage, heroText }) => {
  if (!heroImage.asset && !heroText) return null
  if (!heroImage.asset && heroText)
    return (
      <div className="flex items-center justify-center bg-gray-100 w-full h-48">
        <Typography.H1>{heroText}</Typography.H1>
      </div>
    )

  if (!heroImage.asset && heroText) return <HeroImage data={heroImage} />

  if (heroImage.asset && heroText)
    return (
      <div className="relative w-full">
        <div className="relative h-40 sm:h-80 inset-0 ">
          <HeroImage data={heroImage} />
        </div>

        <div className="absolute w-full inset-0 flex items-center justify-center text-white ">
          <Typography.H1>{heroText}</Typography.H1>
        </div>
      </div>
    )

  if (heroImage.asset && !heroText)
    return (
      <div className="relative w-full">
        <div className="relative inset-0">
          <div className="h-80">
            <HeroImage data={heroImage} />
          </div>
        </div>
      </div>
    )

  return null
}

export default Component
