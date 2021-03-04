import React from 'react'
import { Link } from 'gatsby'
import getYouTubeId from 'get-youtube-id'
import SyntaxHighlighter from './syntaxHighlight'
import * as utils from '../utils'
import * as Typography from './typography'
import * as Links from './links'
import sanityClientConfig from '../sanity-client'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import BodyImage from './bodyImage'
import ReactYoutube from 'react-youtube'
import { BsLink } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoBitbucket } from 'react-icons/io'
import { FaGitlab } from 'react-icons/fa'

export const H1 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return withAnchor ? (
    <Links.AnchorWithIcon slug={slug}>
      <Typography.H1>{children}</Typography.H1>
    </Links.AnchorWithIcon>
  ) : (
    <Typography.H1>{children}</Typography.H1>
  )
}

export const H2 = ({ children, withAnchor = false }) => {
  let slug = utils.slugify(children[0])
  if (slug[0].match(/^\d/)) slug = slug.slice(2)

  return withAnchor ? (
    <Typography.H2 additionalClassnames="group flex items-center">
      {children}
      <Link
        id={slug}
        className="group-hover:opacity-100 opacity-0 anchor inline-flex items-center ml-2 text-purple-700"
        to={`#${slug}`}
      >
        <BsLink size={20} />
      </Link>
    </Typography.H2>
  ) : (
    <Typography.H2>{children}</Typography.H2>
  )
}

export const H3 = ({ children, withAnchor = false }) => {
  let slug = utils.slugify(children[0])
  if (slug[0].match(/^\d/)) slug = slug.slice(2)
  return withAnchor ? (
    <Typography.H3 additionalClassnames="group flex items-center">
      {children}
      <Link
        id={slug}
        className="group-hover:opacity-100 opacity-0 anchor inline-flex items-center ml-2 text-purple-700"
        to={`#${slug}`}
      >
        <BsLink size={20} />
      </Link>
    </Typography.H3>
  ) : (
    <Typography.H2>{children}</Typography.H2>
  )
}

export const H4 = ({ children, withAnchor = false }) => {
  let slug = utils.slugify(children[0])
  if (slug[0].match(/^\d/)) slug = slug.slice(2)
  return withAnchor ? (
    <Typography.H4 additionalClassnames="group flex items-center">
      {children}
      <Link
        id={slug}
        className="group-hover:opacity-100 opacity-0 anchor inline-flex items-center ml-2 text-purple-700"
        to={`#${slug}`}
      >
        <BsLink size={20} />
      </Link>
    </Typography.H4>
  ) : (
    <Typography.H4>{children}</Typography.H4>
  )
}

export const Paragraph = ({ children }) => (
  <Typography.BodyParagraph>{children}</Typography.BodyParagraph>
)

export const Image = ({ node }) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 1200 },
    sanityClientConfig
  )

  return <BodyImage fluid={fluidProps} alt={node.alt} />
}

export const YouTube = ({ node }) => {
  const { url } = node
  const id = getYouTubeId(url)
  return (
    <div className="my-12">
      <ReactYoutube videoId={id} />
    </div>
  )
}

export const Code = ({ node }) => (
  <div className="my-8">
    <SyntaxHighlighter code={node.code} language={node.language} />
  </div>
)

export const RepoLink = ({ node }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'github':
        return <AiFillGithub size={25} />
      case 'bitbucket':
        return <IoLogoBitbucket size={25} />
      case 'gitlab':
        return <FaGitlab size={25} />
      default:
        return null
    }
  }

  return (
    <div>
      <a
        aria-label={node.title}
        href={node.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="font-semibold hover:bg-gray-100 bg-gray-50  text-xl inline-flex items-center rounded-lg shadow-lg px-6 py-4 my-4 ">
          <div className="mr-4">{getIcon(node.linkTo)}</div>
          {node.title}
        </div>
      </a>
    </div>
  )
}

export const ExternalLink = ({ mark, children }) =>
  mark.blank ? (
    <a
      className="text-saGreen font-bold text-xl"
      href={mark.href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <a
      aria-label={children}
      className="text-saPurple font-bold text-xl"
      href={mark.href}
    >
      {children}
    </a>
  )

export const InternalLink = ({ mark, children }) => {
  if (!mark.reference) {
    return null
  }

  if (mark.reference._type.includes('Page')) {
    const url = `/${utils.getRouteNameFromPageType(mark.reference._type)}`

    return (
      <Link
        aria-label={children}
        className="text-purple-700 hover:text-purple-900"
        to={url}
      >
        {children}
      </Link>
    )
  }

  const url = `/${utils.getRouteNameFromContentType(mark.reference._type)}/${
    mark.reference.slug.current
  }`

  return (
    <Link
      aria-label={children}
      className="text-purple-700 hover:text-purple-900"
      to={url}
    >
      {children}
    </Link>
  )
}
