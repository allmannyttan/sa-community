import React from 'react'
import { Link } from 'gatsby'
import { AiOutlineLink } from 'react-icons/ai'

export const Article = ({ children, slug }) => {
  const sharedStyle = `font-normal text-base `
  const isActive = ({ location }) => {
    const isCurrent = location.pathname.includes(`/${slug}`)

    return isCurrent ? { className: `${sharedStyle}` } : {}
  }

  return (
    <Link
      to={`/${slug}`}
      className={`text-saBlack   ${sharedStyle}`}
      getProps={isActive}
    >
      - <span className="hover:underline">{children}</span>
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

export const Basic = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-saGreenDark hover:underline font-current text-lg"
    >
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

export const NavLink = ({ to, cb, children }) => {
  const [active, set] = React.useState(false)

  return (
    <Link
      to={to}
      onTouchStart={() => set(true)}
      onTouchEnd={() => set(false)}
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      onClick={() => cb && cb()}
      className={`rounded-md px-4 py-2 transition-color duration-100 mr-2 ${
        active && 'bg-purple-50'
      } text-gray-700 hover:text-black whitespace-nowrap`}
      activeClassName="bg-purple-50"
      activeStyle={{ color: 'black' }}
    >
      {children}
    </Link>
  )
}
