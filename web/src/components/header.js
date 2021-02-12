import React from 'react'
import { Link } from 'gatsby'
import logotype from './../images/logo.svg'

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="rounded-md px-4 py-2 transition-all bg-pi duration-100 text-gray-700 hover:bg-purple-50 hover:text-black"
    activeClassName="bg-purple-50"
    activeStyle={{ color: 'black' }}
  >
    {children}
  </Link>
)

const Component = () => (
  <div
    className="fixed w-full z-50"
    style={{
      backdropFilter: 'blur(5px)',
      background: 'rgba(255,255,255,.90)',
      fontFamily: 'system-ui',
    }}
  >
    <header className="max-w-screen-2xl mx-auto">
      <nav className="w-full h-24 flex justify-between items-center px-12">
        <Link to="/">
          <img className="w-32" src={logotype} alt="website logotype" />
        </Link>
        <ul className="flex justify-end gap-1 ">
          <li>
            <NavLink to="/docs/projekt">Projekt</NavLink>
          </li>
          <li>
            <NavLink to="/docs/api">API:er</NavLink>
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
  </div>
)

export default Component
