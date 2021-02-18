import React from 'react'

export const H1 = ({ children }) => {
  return (
    <h1 className="text-saBlack text-4xl font-bold my-4 tracking-wide">
      {children}
    </h1>
  )
}

export const H2 = ({ children }) => (
  <h2 className="text-saBlack text-2xl font-bold my-3 tracking-wide">
    {children}
  </h2>
)

export const H3 = ({ children }) => {
  return (
    <h3 className="text-saBlack text-xl font-bold my-2 tracking-wide">
      {children}
    </h3>
  )
}

export const H4 = ({ children }) => (
  <h4 className="text-base text-saBlack font-medium tracking-wide my-2">
    {children}
  </h4>
)

export const BodyParagraph = ({ children }) => (
  <p className="max-w-2xl text-base md:text-lg tracking-wide my-2">
    {children}
  </p>
)

export const DescriptionParagraph = ({ children }) => (
  <p className="max-w-2xl font-light text-base md:text-lg tracking-wide">
    {children}
  </p>
)
