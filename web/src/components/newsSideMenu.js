import React from 'react'
import * as utils from '../utils'
import * as Links from './links'
import * as Typography from './typography'

const NewsSideMenu = ({ posts }) => {
  if (posts.length === 0) {
    return null
  }

  return (
    <>
      <Typography.H4>NYHETER</Typography.H4>
      <nav className="py-4">
        <ol className="divide-y divide-lightGray divide-solid">
          {posts.map((post, i) => {
            return (
              <div key={i}>
                <li className="my-4 w-full">
                  <Links.News slug={post.slug.current}>{post.title}</Links.News>
                </li>
              </div>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default NewsSideMenu
