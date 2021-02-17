import React from 'react'
import Article from '../article'
import Aside from '../aside'
import TableOfContents from '../tableOfContents'
import BlockContent from '../blockContent'

const ArticlePage = ({ tableOfContents, rawBody, title }) => {
  return (
    <div className={`flex ${!tableOfContents && 'justify-center'}`}>
      {tableOfContents && (
        <Aside>
          <TableOfContents blocks={rawBody} />
        </Aside>
      )}
      <Article title={title}>
        <BlockContent blocks={rawBody} withAnchor={tableOfContents && true} />
      </Article>
    </div>
  )
}

export default ArticlePage
