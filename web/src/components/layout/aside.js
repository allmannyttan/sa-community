import React from 'react'

const Aside = ({ children }) => {
  return (
    <aside className="w-64 hidden md:block flex-shrink-0 relative">
      <section className="fixed w-64 h-full my-36 md:pl-14 overflow-scroll">
        {children}
      </section>
    </aside>
  )
}

export default Aside
