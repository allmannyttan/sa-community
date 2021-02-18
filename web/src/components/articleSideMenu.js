import React from 'react'
import * as Links from './links'
import * as Typography from './typography'

const ArticleSideMenu = ({ posts, title, url }) => {
  if (posts.length === 0) {
    return null
  }

  return (
    <>
      <Typography.H4>{title}</Typography.H4>
      <nav className="py-4">
        <ol className="divide-y divide-lightGray divide-solid">
          {posts.map((post, i) => {
            return (
              <div key={i}>
                <li className="my-4 w-full">
                  <Links.Article slug={`${url}/${post.slug.current}`}>
                    {post.title}
                  </Links.Article>
                </li>
              </div>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default ArticleSideMenu
