import React from 'react'
import { Link } from 'gatsby'
import { AiOutlineLink } from 'react-icons/ai'

export const Anchor = ({ children, slug, style }) => {
  const sharedStyle = `font-normal text-sm ${style}`
  const isActive = ({ location }) => {
    const isCurrent = location.hash.includes(slug)
    return isCurrent
      ? { className: `underline text-saGreen ${sharedStyle}` }
      : {}
  }

  return (
    <Link
      to={`#${slug}`}
      className={`text-saGreyBlueDar hover:underline hover:text-saGreen ${sharedStyle}`}
      getProps={isActive}
    >
      {children}
    </Link>
  )
}

export const AnchorWithIcon = ({ children, slug }) => (
  <Link id={slug} className="anchor flex items-center gap-2" to={`#${slug}`}>
    {children}
    <AiOutlineLink />
  </Link>
)
