import React from 'react'
import { Link } from 'gatsby'
import logotype from './../images/logo.svg'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const NavLink = ({ to, cb, children }) => {
  const [active, set] = React.useState(false)

  return (
    <Link
      to={to}
      onTouchStart={() => set(true)}
      onTouchEnd={() => set(false)}
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      onClick={() => cb && cb()}
      className={`rounded-md px-4 py-2 transition-color duration-100 ${
        active && 'bg-purple-50'
      } text-gray-700 hover:text-black whitespace-nowrap`}
      activeClassName="bg-purple-50"
      activeStyle={{ color: 'black' }}
    >
      {children}
    </Link>
  )
}

const Component = () => {
  const routes = Object.entries({
    '/docs/projekt': 'Projekt',
    '/docs/api': 'API:er',
    '/nyheter': 'Nyheter',
    '/kallkod': 'Källkod',
    '/om-oss': 'Om oss',
    '/kommunikation': 'Kommunikation',
  }).map(([route, name]) => (
    <li className="mb-6">
      <NavLink cb={() => setOpen(false)} to={route}>
        {name}
      </NavLink>
    </li>
  ))

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
      <div
        className={`flex md:hidden justify-center pl-8 pt-24 fixed top-0 left-0 z-10 w-screen h-screen bg-white ${
          !open && 'hidden'
        }`}
      >
        <ul className="text-xl">{routes}</ul>
      </div>
      <header className="max-w-screen-2xl mx-auto">
        <nav className="w-full h-24 flex justify-between items-center px-12">
          <Link to="/">
            <img className="w-32" src={logotype} alt="website logotype" />
          </Link>
          <button
            onClick={() => setOpen((curr) => !curr)}
            className="block md:hidden relative z-10"
          >
            {open ? (
              <AiOutlineClose size={40} />
            ) : (
              <HiOutlineMenuAlt3 size={40} />
            )}
          </button>

          <ul className=" hidden md:flex justify-end gap-1 ">{routes}</ul>
        </nav>
      </header>
    </div>
  )
}

export default Component
