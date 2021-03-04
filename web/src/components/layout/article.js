import React from 'react'
import BreadCrumbs from '../breadcrumbs'

const Article = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto relative w-full">
      <article className="max-w-screen-lg flex flex-col px-8 pt-6 md:pt-24">
        <div className="mb-10 md:mb-16">
          <BreadCrumbs />
        </div>

        {children}
      </article>
    </div>
  )
}

export default Article
