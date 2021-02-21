import React from 'react'
import BreadCrumbs from '../breadcrumbs'

const Article = ({ children }) => {
  return (
    <article className="max-w-screen-md flex flex-col px-6 pt-6 md:pl-12 md:pt-12">
      <div className="mb-12">
        <BreadCrumbs />
      </div>

      {children}
    </article>
  )
}

export default Article
