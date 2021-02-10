import React from 'react'
import { Link } from 'gatsby'
import * as utils from '../utils'

export const H1 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return (
    <h1 className="text-4xl font-bold my-2">
      {withAnchor ? (
        <Link id={slug} to={`${window.location.pathname}#${slug}`}>
          {children}
        </Link>
      ) : (
        children
      )}
    </h1>
  )
}

export const H2 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return (
    <h2 className="text-2xl font-bold my-2">
      {withAnchor ? (
        <Link id={slug} to={`${window.location.pathname}#${slug}`}>
          {children}
        </Link>
      ) : (
        children
      )}
    </h2>
  )
}

export const H3 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return (
    <h2 className="text-xl font-bold my-2">
      {withAnchor ? (
        <Link id={slug} to={`${window.location.pathname}#${slug}`}>
          {children}
        </Link>
      ) : (
        children
      )}
    </h2>
  )
}
