import React from 'react'
import * as utils from '../utils'
import * as Links from './links'

const TableOfContents = ({ blocks }) => {
  const targetItems = ['h2', 'h3', 'h4']
  const menuItems = blocks.filter((block) => targetItems.includes(block.style))

  if (menuItems.length === 0) {
    return null
  }

  return (
    <nav className="fixed w-full flex justify-end px-8">
      <ol>
        {menuItems.map((item, i) => {
          const slug = utils.slugify(item.children[0].text)
          return (
            <div key={i}>
              <Links.Anchor slug={slug}>
                {item.style === 'h2' && (
                  <li className="text-xl pl-2">{item.children[0].text}</li>
                )}
                {item.style === 'h3' && (
                  <li className="text-base pl-4">{item.children[0].text}</li>
                )}
                {item.style === 'h4' && (
                  <li className="text-sm pl-6">{item.children[0].text}</li>
                )}
              </Links.Anchor>
            </div>
          )
        })}
      </ol>
    </nav>
  )
}

export default TableOfContents
