import React from 'react'
import { Link } from 'gatsby'
import logotype from './../images/logo.svg'
import { FiMenu } from 'react-icons/fi'

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="rounded-md px-4 py-2 transition-color duration-100 text-gray-700 hover:bg-purple-50 hover:text-black"
    activeClassName="bg-purple-50"
    activeStyle={{ color: 'black' }}
  >
    {children}
  </Link>
)

const Component = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      className="fixed w-full z-50"
      style={{
        backdropFilter: 'blur(5px)',
        background: 'rgba(255,255,255,.90)',
        fontFamily: 'system-ui',
      }}
    >
      {/* <div
        className={`flex items-center pl-8 pt-24 fixed top-0 left-0 z-10 w-screen h-screen bg-white ${
          open && 'hidden'
        }`}
      >
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
      </div> */}
      <header className="max-w-screen-2xl mx-auto">
        <nav className="w-full h-24 flex justify-between items-center px-12">
          <Link to="/">
            <img className="w-32" src={logotype} alt="website logotype" />
          </Link>
          <button
            onClick={() => setOpen((curr) => !curr)}
            className="block md:hidden relative z-10"
          >
            <FiMenu size={32} />
          </button>
          <div className="hidden md:block">
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
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Component
