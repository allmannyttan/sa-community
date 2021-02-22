import React from 'react'

const Aside = ({ children }) => {
  return (
    <aside className="w-64 lg:w-80 hidden md:block flex-shrink-0">
      <section className="fixed w-64 lg:w-80 h-screen border-r border-lightGrey pt-24 md:pl-10">
        {children}
      </section>
    </aside>
  )
}

export default Aside
