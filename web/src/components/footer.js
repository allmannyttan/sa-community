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

const IconLink = ({ children, to, label }) => (
  <span className="mr-6 md:mr-12 text-saDarkGrey hover:text-black transition-color duration-100">
    <a
      aria-label={label}
      href={to}
      target="_blank"
      rel="noreferrer"
      className="flex"
    >
      {children}
    </a>
  </span>
)

const Footer = () => {
  const { sanitySiteSettings } = useStaticQuery(query)

  return (
    <footer className="px-8 py-8 mt-36 bg-white border-saLightGrey w-full relative z-10 bg-gradient-to-t via-white from-purple-50 to-white">
      <div className="flex mx-auto max-w-screen-2xl justify-between h-full items-center">
        <a
          className="text-sm text-saDarkGrey hover:text-black"
          href={`mailto:${sanitySiteSettings.email}`}
        >
          Kontakta oss
        </a>
        <div className="flex items-center ">
          {sanitySiteSettings.github && (
            <IconLink label="Github" to={sanitySiteSettings.github}>
              <FaGithub size={30} />
            </IconLink>
          )}
          {sanitySiteSettings.twitter && (
            <IconLink label="Twitter" to={sanitySiteSettings.twitter}>
              <FaTwitter size={30} />
            </IconLink>
          )}
          {sanitySiteSettings.facebook && (
            <IconLink label="Facebook" to={sanitySiteSettings.facebook}>
              <FaFacebook size={30} />
            </IconLink>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
