import React from 'react'

const Aside = ({ children }) => {
  return (
    <aside className="w-72 hidden md:block flex-shrink-0 relative md:mr-16">
      <section className="fixed w-72 my-36 pt-24 pl-14 overflow-y-auto inset-y-0">
        {children}
      </section>
    </aside>
  )
}

export default Aside
