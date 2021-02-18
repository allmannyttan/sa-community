import React from 'react'
import Article from '../article'
import Aside from '../aside'
import TableOfContents from '../tableOfContents'
import BlockContent from '../blockContent'
import BreadCrumbs from '../breadcrumbs'
import { useLocation } from '@reach/router'

const ArticlePage = ({ tableOfContents, rawBody, title }) => {
  const location = useLocation()

  return (
    <div className={`flex ${!tableOfContents && 'justify-center'}`}>
      {tableOfContents && (
        <Aside>
          <TableOfContents blocks={rawBody} />
        </Aside>
      )}
      <div>
        <BreadCrumbs path={location.pathname} />
        <Article title={title}>
          <BlockContent blocks={rawBody} withAnchor={tableOfContents && true} />
        </Article>
      </div>
    </div>
  )
}

export default ArticlePage
