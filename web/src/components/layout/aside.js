import React from 'react'
import BreadCrumbs from '../breadcrumbs'

const Aside = ({ children }) => {
  return (
    <aside className="w-1/5 hidden md:block">
      <section className="fixed w-1/5 h-screen border-r border-lightGrey pt-10 md:pl-4 ">
        <BreadCrumbs />
        {children}
      </section>
    </aside>
  )
}

export default Aside
