import React from 'react'

export const H1 = ({ children }) => {
  return (
    <h1 className="text-saBlack text-4xl font-bold my-4 tracking-wide">
      {children}
    </h1>
  )
}

export const H2 = ({ children, additionalClassnames = '' }) => {
  const classNames = 'text-saBlack text-2xl font-bold mt-6 mb-3 tracking-wide'.concat(
    ' ',
    additionalClassnames
  )

  return <h2 className={classNames}>{children}</h2>
}

export const H3 = ({ children, additionalClassnames = '' }) => {
  const classNames = 'text-saBlack text-xl font-semibold mt-6 mb-2 tracking-wide'.concat(
    ' ',
    additionalClassnames
  )

  return <h3 className={classNames}>{children}</h3>
}

export const H4 = ({ children, additionalClassnames = '' }) => {
  const classNames = 'text-lg text-saBlack font-medium tracking-wide my-2 mt-4 mb-2'.concat(
    ' ',
    additionalClassnames
  )

  return <h4 className={classNames}>{children}</h4>
}

export const BodyParagraph = ({ children }) => (
  <p className="max-w-2xl text-base md:text-lg tracking-wide my-2">
    {children}
  </p>
)

export const Description = ({ children }) => (
  <p className="group-hover:text-black max-w-2xl  font-normal text-sm text-gray-700">
    {children}
  </p>
)
