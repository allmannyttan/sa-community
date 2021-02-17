import React from 'react'
import Article from '../article'
import Aside from '../aside'
import TableOfContents from '../tableOfContents'
import BlockContent from '../blockContent'
import NewsSideMenu from '../newsSideMenu'

const ArticlePage = ({ tableOfContents, rawBody, title, newsSideMenu }) => {
  return (
    <div
      className={`flex ${
        !tableOfContents && !newsSideMenu && 'justify-center'
      } `}
    >
      {tableOfContents && (
        <Aside>
          <TableOfContents blocks={rawBody} />
        </Aside>
      )}
      {newsSideMenu && (
        <Aside>
          <NewsSideMenu posts={newsSideMenu} />
        </Aside>
      )}
      <Article title={title}>
        <BlockContent blocks={rawBody} withAnchor={tableOfContents && true} />
      </Article>
    </div>
  )
}

export default ArticlePage
