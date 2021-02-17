import React from 'react'
import * as utils from '../utils'
import * as Links from './links'
import * as Typography from './typography'

const TableOfContents = ({ blocks }) => {
  const targetItems = ['h2', 'h3', 'h4']
  const menuItems = blocks.filter((block) => targetItems.includes(block.style))

  if (menuItems.length === 0) {
    return null
  }

  const getTitleStyle = (style) => {
    switch (style) {
      case 'h3':
        return 'pl-2'
      case 'h4':
        return 'pl-3'
      default:
        return
    }
  }

  return (
    <>
      <Typography.H4>INNEHÅLL</Typography.H4>
      <nav className="py-4">
        <ol>
          {menuItems.map((item, i) => {
            const slug = utils.slugify(item.children[0].text)
            const style = getTitleStyle(item.style)
            return (
              <div key={i}>
                <li className="my-4 w-full">
                  <Links.Anchor slug={slug} style={style}>
                    {item.children[0].text}
                  </Links.Anchor>
                </li>
              </div>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default TableOfContents
