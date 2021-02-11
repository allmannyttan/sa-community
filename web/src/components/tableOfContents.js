import React from 'react'
import { Link } from 'gatsby'
import * as utils from '../utils'

const WithAnchor = ({ children, slug }) => (
  <Link to={`#${slug}`}>{children}</Link>
)

const TableOfContents = ({ blocks }) => {
  const MenuItems = blocks.filter(
    (block) =>
      (block.style === 'h1') | (block.style === 'h2') | (block.style === 'h3')
  )
  return (
    <nav>
      <p className="font-bold">Menu starts here</p>
      <ol>
        {MenuItems.map((item, i) => {
          const slug = utils.slugify(item.children[0].text)

          return (
            <div key={i}>
              {item.style === 'h1' && (
                <WithAnchor slug={slug}>
                  <li className="text-1xl">{item.children[0].text}</li>
                </WithAnchor>
              )}
              {item.style === 'h2' && (
                <WithAnchor slug={slug}>
                  <li className="text-xl">{item.children[0].text}</li>
                </WithAnchor>
              )}
              {item.style === 'h3' && (
                <WithAnchor slug={slug}>
                  <li className="text-base">{item.children[0].text}</li>
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
