import React from 'react'
import * as utils from '../utils'
import * as Links from './links'
import * as Typography from './typography'

const TableOfContents = ({ blocks = [] }) => {
  const targetItems = ['h2', 'h3', 'h4']
  const menuItems = blocks.filter((block) => targetItems.includes(block.style))

  if (menuItems.length === 0) {
    return null
  }

  const getTitleStyle = (style) => {
    switch (style) {
      case 'h3':
        return 'pl-4'
      case 'h4':
        return 'pl-8'
      default:
        return
    }
  }

  return (
    <>
      <h4 className="text-base text-saBlack font-medium tracking-wide mb-2">
        Innehåll
      </h4>
      <nav>
        <ol>
          {menuItems.map((item, i) => {
            const slug = utils.slugify(item.children[0].text)
            const style = getTitleStyle(item.style)
            return (
              <li key={i} className="my-4 w-full">
                <Links.TableOfContents slug={slug} style={style}>
                  {item.children[0].text}
                </Links.TableOfContents>
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default TableOfContents
