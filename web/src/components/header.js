import React from 'react'
import { Link } from 'gatsby'
import logotype from './../images/logo.svg'

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="rounded-md px-4 py-2 transition-all duration-100 text-gray-800 hover:bg-gray-100 hover:text-black"
  >
    {children}
  </Link>
)

const Component = () => (
  <header>
    <nav
      className="w-full h-24 flex justify-between items-center px-12 border-b fixed z-50 opacity-90"
      style={{
        backdropFilter: 'blur(6px)',
        background: 'rgba(255,255,255,.95)',
        fontFamily: 'system-ui',
      }}
    >
      <Link to="/">
        <img className="w-40" src={logotype} alt="website logotype" />
      </Link>
      <ul className="flex justify-end gap-1 max-w-screen-2xl">
        <li>
          <NavLink to="/">Hem</NavLink>
        </li>
        <li>
          <NavLink to="/projekt">Projekt</NavLink>
        </li>
        <li>
          <NavLink to="/api">API:er</NavLink>
        </li>
        <li>
          <NavLink to="/nyheter">Nyheter</NavLink>
        </li>
        <li>
          <NavLink to="/kallkod">Källkod</NavLink>
        </li>
        <li>
          <NavLink to="/om-oss">Om oss</NavLink>
        </li>
        <li>
          <NavLink to="/kommunikation">Kommunikation</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Component
