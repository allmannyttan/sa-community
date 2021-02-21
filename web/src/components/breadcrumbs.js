import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { RiArrowDropRightLine } from 'react-icons/ri'

const BreadCrumbs = () => {
  const pathname = useLocation().pathname

  const parts = pathname
    .split('/')
    .filter(Boolean)
    .map((p, i, arr) => ({
      name: p
        .split('-')
        .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
        .join(' '),
      route: `/${arr.filter((_, i2) => i2 <= i).join('/')}`,
    }))

  return (
    <nav className="text-gray-500 flex items-center">
      {parts.map((part) => (
        <span className="flex items-center" key={part.name}>
          <Link
            to={part.route}
            className="text-sm tracking-wide  hover:text-purple-700 hover:underline"
          >
            {part.name}
          </Link>

          <span role="presentation">
            <RiArrowDropRightLine className="text-gray-400" size={20} />
          </span>
        </span>
      ))}
    </nav>
  )
}

export default BreadCrumbs
