import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'

const query = graphql`
  query siteSettings {
    sanitySiteSettings {
      twitter
      github
      facebook
      email
    }
  }
`

const IconLink = ({ children, to }) => (
  <span className="mr-6 md:mr-12 text-gray-700 hover:text-black transition-color duration-100">
    <a href={to} target="_blank" rel="noreferrer" className="flex">
      {children}
    </a>
  </span>
)

const Footer = () => {
  const { sanitySiteSettings } = useStaticQuery(query)

  return (
    <footer className="px-8 py-8 mt-24 bg-white border-t border-lightGrey w-full relative z-10 bg-gradient-to-t via-transparent from-purple-50 to-transparent">
      <div className="flex mx-auto max-w-screen-xl justify-between h-full items-center">
        <a
          className="text-sm text-gray-700 hover:text-black"
          href={`mailto:${sanitySiteSettings.email}`}
        >
          Kontakta oss
        </a>
        <div className="flex items-center ">
          {sanitySiteSettings.github && (
            <IconLink to={sanitySiteSettings.github}>
              <FaGithub size={30} />
            </IconLink>
          )}
          {sanitySiteSettings.twitter && (
            <IconLink to={sanitySiteSettings.twitter}>
              <FaTwitter size={30} />
            </IconLink>
          )}
          {sanitySiteSettings.facebook && (
            <IconLink to={sanitySiteSettings.facebook}>
              <FaFacebook size={30} />
            </IconLink>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
