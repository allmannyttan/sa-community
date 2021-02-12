import React from 'react'
import { Link } from 'gatsby'
import { AiOutlineLink } from 'react-icons/ai'

export const Anchor = ({ children, slug }) => (
  <Link to={`#${slug}`}>{children}</Link>
)

export const AnchorWithIcon = ({ children, slug }) => (
  <Link className="flex items-center gap-2" to={`#${slug}`}>
    {children}
    <AiOutlineLink />
  </Link>
)
