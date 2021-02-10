import React from 'react'
import { Link } from 'gatsby'
import { AiOutlineLink } from 'react-icons/ai'
import * as utils from '../utils'
import * as Typography from './typography'

const WithAnchor = ({ children, slug }) => (
  <Link className="flex items-center gap-2" id={slug} to={`#${slug}`}>
    {children}
    <AiOutlineLink />
  </Link>
)

export const H1 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return withAnchor ? (
    <WithAnchor slug={slug}>
      <Typography.H1>{children}</Typography.H1>
    </WithAnchor>
  ) : (
    <Typography.H1>{children}</Typography.H1>
  )
}

export const H2 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return withAnchor ? (
    <WithAnchor slug={slug}>
      <Typography.H2>{children}</Typography.H2>
    </WithAnchor>
  ) : (
    <Typography.H2>{children}</Typography.H2>
  )
}

export const H3 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return withAnchor ? (
    <WithAnchor slug={slug}>
      <Typography.H3>{children}</Typography.H3>
    </WithAnchor>
  ) : (
    <Typography.H3>{children}</Typography.H3>
  )
}
