import React from 'react'
import { Link } from 'gatsby'
import { AiOutlineLink } from 'react-icons/ai'

export const Article = ({ children, slug }) => {
  const sharedStyle = `font-normal text-base `
  const isActive = ({ location }) => {
    const isCurrent = location.pathname.includes(`/${slug}`)

    return isCurrent ? { className: `text-saGreen ${sharedStyle}` } : {}
  }

  return (
    <Link
      to={`/${slug}`}
      className={`text-saGreyBlueDar hover:text-saGreen  ${sharedStyle}`}
      getProps={isActive}
    >
      {children}
    </Link>
  )
}

export const TableOfContents = ({ children, slug, style }) => {
  const sharedStyle = `font-normal text-sm ${style}`
  const isActive = ({ location }) => {
    const isCurrent = location.hash.includes(slug)
    return isCurrent ? { className: `underline ${sharedStyle}` } : {}
  }

  return (
    <Link
      to={`#${slug}`}
      className={`text-gray-700 hover:text-black ${sharedStyle}`}
      getProps={isActive}
    >
      {children}
    </Link>
  )
}

export const Anchor = ({ children, slug }) => {
  return (
    <Link to={slug} className="text-saGreen underline font-normal text-lg">
      {children}
    </Link>
  )
}

export const AnchorWithIcon = ({ children, slug }) => (
  <Link id={slug} className="anchor inline-flex items-center" to={`#${slug}`}>
    {children}
    <div className="ml-2">
      <AiOutlineLink />
    </div>
  </Link>
)
