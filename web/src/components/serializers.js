import React from 'react'
import { Link } from 'gatsby'
import { AiOutlineLink } from 'react-icons/ai'
import getYouTubeId from 'get-youtube-id'
import SyntaxHighlighter from './syntaxHighlight'
import * as utils from '../utils'
import * as Typography from './typography'
import sanityClientConfig from '../sanity-client'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import BodyImage from './bodyImage'
import ReactYoutube from 'react-youtube'

const WithAnchor = ({ children, slug }) => (
  <Link className="flex items-center gap-2" id={slug} to={`#${slug}`}>
    {children}
    <AiOutlineLink />
  </Link>
)

export const H1 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return withAnchor ? (
    <WithAnchor slug={slug}>
      <Typography.H1>{children}</Typography.H1>
    </WithAnchor>
  ) : (
    <Typography.H1>{children}</Typography.H1>
  )
}

export const H2 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return withAnchor ? (
    <WithAnchor slug={slug}>
      <Typography.H2>{children}</Typography.H2>
    </WithAnchor>
  ) : (
    <Typography.H2>{children}</Typography.H2>
  )
}

export const H3 = ({ children, withAnchor = false }) => {
  const slug = utils.slugify(children[0])

  return withAnchor ? (
    <WithAnchor slug={slug}>
      <Typography.H3>{children}</Typography.H3>
    </WithAnchor>
  ) : (
    <Typography.H3>{children}</Typography.H3>
  )
}

export const Image = ({ node }) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 800 },
    sanityClientConfig
  )

  return <BodyImage fluid={fluidProps} alt={node.alt} />
}

export const YouTube = ({ node }) => {
  const { url } = node
  const id = getYouTubeId(url)
  return <ReactYoutube videoId={id} />
}

export const Code = ({ node }) => (
  <SyntaxHighlighter code={node.code} language={node.language} />
)
