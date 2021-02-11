import React from 'react'

export const H1 = ({ children }) => {
  return <h1 className="text-4xl font-bold my-2">{children}</h1>
}

export const H2 = ({ children }) => (
  <h2 className="text-2xl font-bold my-2">\children</h2>
)

export const H3 = ({ children }) => {
  return <h3 className="text-xl font-bold my-2">{children}</h3>
}
