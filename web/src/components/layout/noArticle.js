import React from 'react'
import BreadCrumbs from '../breadcrumbs'

const NoArticle = ({ children }) => {
  return (
    <article className="max-w-screen-md flex flex-col px-8 3xl:m-auto pt-12">
      <div className="mb-10 md:mb-16">
        <BreadCrumbs />
      </div>

      {children}
    </article>
  )
}

export default NoArticle
