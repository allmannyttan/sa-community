import React from 'react'
import { Link } from 'gatsby'
import logotype from './../images/logo.svg'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { graphql, useStaticQuery } from 'gatsby'
import * as Links from '../components/links'

const query = graphql`
  query allPages {
    sanityHomePage {
      pageName
    }
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
    case 'sanityHomePage':
      return { pageName, path: '/' }
    default:
      return '/'
  }
}

const Header = () => {
  const data = useStaticQuery(query)
  const routes = Object.entries(data).map(getLinkPathFromPageData)

  const [open, setOpen] = React.useState(false)

  return (
    <div className="fixed w-full z-50 md:bg-white md:opacity-90 blur">
      <div
        className={`flex md:hidden bg-white justify-center pl-8 pt-20 fixed top-0 left-0 z-10 w-screen h-screen ${
          !open && 'hidden'
        }`}
      >
        <ul className="text-xl mt-12">
          {routes.map(({ pageName, path }) => (
            <li className="mb-6 md:mb-0" key={path}>
              <Links.NavLink cb={() => setOpen(false)} to={path}>
                {pageName}
              </Links.NavLink>
            </li>
          ))}
        </ul>
      </div>
      <header className="mx-auto max-w-screen-3xl">
        <nav className="w-full h-20 flex justify-between items-center px-8">
          <Link className="invisible md:visible" to="/">
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

          <ul className="hidden md:flex justify-end">
            {routes
              .filter((route) => route.path !== '/')
              .map(({ pageName, path }) => (
                <li className="mb-6 md:mb-0" key={path}>
                  <Links.NavLink cb={() => setOpen(false)} to={path}>
                    {pageName}
                  </Links.NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
