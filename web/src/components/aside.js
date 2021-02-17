import React from 'react'

const Aside = ({ children }) => {
  return (
    <aside className="w-1/5 hidden md:block">
      <section className="fixed w-1/5 h-screen border-r border-lightGrey pt-10 md:pl-4 md:pr-5">
        {children}
      </section>
    </aside>
  )
}

export default Aside
