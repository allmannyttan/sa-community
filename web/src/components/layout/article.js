import React from 'react'

const Article = ({ children }) => {
  return (
    <article className="max-w-screen-md flex flex-col px-6 pt-6 md:pl-12 md:pt-12">
      {children}
    </article>
  )
}

export default Article
