import React from 'react'
import BreadCrumbs from '../breadcrumbs'

const Article = ({ children }) => {
  return (
    <article className="max-w-screen-md flex flex-col px-8 pt-6 md:pl-12 md:pt-12 3xl:m-auto">
      <div className="mb-10 md:mb-4">
        <BreadCrumbs />
      </div>

      {children}
    </article>
  )
}

export default Article
