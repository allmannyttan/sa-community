import React from 'react'
import { Link } from 'gatsby'
import * as utils from '../utils'

const WithAnchor = ({ children, slug }) => (
  <Link to={`#${slug}`}>{children}</Link>
)

const TableOfContents = ({ blocks }) => {
  const menuItems = blocks.filter(
    (block) =>
      (block.style === 'h1') | (block.style === 'h2') | (block.style === 'h3')
  )
  return (
    <nav className="fixed w-full  flex justify-end px-8">
      <ol>
        {menuItems.map((item, i) => {
          const slug = utils.slugify(item.children[0].text)
          return (
            <div key={i}>
              {item.style === 'h1' && (
                <WithAnchor slug={slug}>
                  <li className="text-2xl pl-1">{item.children[0].text}</li>
                </WithAnchor>
              )}
              {item.style === 'h2' && (
                <WithAnchor slug={slug}>
                  <li className="text-xl pl-2">{item.children[0].text}</li>
                </WithAnchor>
              )}
              {item.style === 'h3' && (
                <WithAnchor slug={slug}>
                  <li className="text-base pl-4">{item.children[0].text}</li>
                </WithAnchor>
              )}
            </div>
          )
        })}
      </ol>
    </nav>
  )
}

export default TableOfContents
