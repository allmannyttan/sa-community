import React from 'react'
import * as Typography from './typography'

const Article = ({ children, title }) => {
  return (
    <article className="max-w-screen-md flex flex-col px-6 pt-6 md:pl-12 md:pt-12">
      <Typography.H1>{title}</Typography.H1>
      {children}
    </article>
  )
}

export default Article
