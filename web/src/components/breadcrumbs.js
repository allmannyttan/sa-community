import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

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
    <div>
      {parts.map((part, i, arr) => (
        <span key={part.name} className="text-sm tracking-wide text-purple-700">
          <Link to={part.route}>{part.name}</Link>{' '}
          {i === arr.length - 1 ? (
            ''
          ) : (
            <span className=" text-gray-600">{'> '}</span>
          )}
        </span>
      ))}
    </div>
  )
}

export default BreadCrumbs
