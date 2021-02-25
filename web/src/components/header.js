import React from 'react'
import { Link } from 'gatsby'
import logotype from './../images/logo.svg'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { graphql, useStaticQuery } from 'gatsby'
import * as Links from '../components/links'

const query = graphql`
  query allPages {
    sanityProjectPage {
      pageName
    }
    sanityApiPage {
      pageName
    }
    sanityNewsPage {
      pageName
    }
    sanityAboutUsPage {
      pageName
    }
    sanitySourceCodePage {
      pageName
    }
    sanityCommunicationPage {
      pageName
    }
  }
`

const getLinkPathFromPageData = ([name, { pageName }]) => {
  switch (name) {
    case 'sanityProjectPage':
      return { pageName, path: '/docs/project' }
    case 'sanityApiPage':
      return { pageName, path: '/docs/api' }
    case 'sanityNewsPage':
      return { pageName, path: '/news' }
    case 'sanityAboutUsPage':
      return { pageName, path: '/about' }
    case 'sanityCommunicationPage':
      return { pageName, path: '/communication' }
    case 'sanitySourceCodePage':
      return { pageName, path: '/source-code' }
    default:
      return '/'
  }
}

const Header = () => {
  const data = useStaticQuery(query)
  const routes = Object.entries(data)
    .map(getLinkPathFromPageData)
    .map(({ pageName, path }) => (
      <li className="mb-6 md:mb-0" key={path}>
        <Links.NavLink cb={() => setOpen(false)} to={path}>
          {pageName}
        </Links.NavLink>
      </li>
    ))

  const [open, setOpen] = React.useState(false)

  return (
    <div
      className="fixed w-full z-50 "
      style={{
        backdropFilter: 'blur(5px)',
        background: 'rgba(255,255,255,.90)',
      }}
    >
      <div
        className={`flex md:hidden justify-center pl-8 pt-20 fixed top-0 left-0 z-10 w-screen h-screen ${
          !open && 'hidden'
        }`}
      >
        <ul className="text-xl">{routes}</ul>
      </div>
      <header>
        <nav className="w-full h-20 flex justify-between items-center px-10">
          <Link to="/">
            <img className="w-20" src={logotype} alt="website logotype" />
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

          <ul className="hidden md:flex justify-end">{routes}</ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
