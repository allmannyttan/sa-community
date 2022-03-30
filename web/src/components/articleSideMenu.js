import React from 'react'
import * as Links from './links'

const ArticleSideMenu = ({ posts, title, url }) => {
  if (posts.length === 0) {
    return null
  }

  return (
    <>
      <h4 className="text-sm text-black font-semibold tracking-wide mb-2 uppercase">
        {title}
      </h4>
      <nav className="py-4">
        <ol>
          {posts.map((post, i) => (
            <li key={i} className="mb-4">
              <Links.Article slug={`${url}/${post.slug.current}`}>
                {post.title || post.pageName}
              </Links.Article>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default ArticleSideMenu
