import React from 'react'
import { Link } from 'gatsby'

const BreadCrumbs = ({ path = '' }) => {
  const parts = path
    .split('/')
    .filter((p) => !!p)
    .map((p) => ({ name: p, route: `/${p}` }))
    .map(({ name }, i, arr) => ({
      name:
        i === arr.length - 1
          ? name.charAt(0).toUpperCase() + name.slice(1)
          : name,
      route: arr
        .filter((_, i2) => i2 <= i)
        .map(({ route }) => route)
        .join(''),
    }))

  return (
    <div>
      {parts.map((part, i, arr) => (
        <span key={part.name} className="text-md tracking-wide">
          <Link to={part.route}>{part.name}</Link>{' '}
          {i === arr.length - 1 ? '' : '/ '}
        </span>
      ))}
    </div>
  )
}

export default BreadCrumbs
