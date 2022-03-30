import React from 'react'
import ArticleSideMenu from './articleSideMenu'

const NewsPosts = ({ posts }) => {
  const [showHistory, setshowHistory] = React.useState(false)
  return (
    <>
      <ArticleSideMenu
        title={'Senaste nyheterna'}
        posts={showHistory ? posts : posts.slice(0, 5)}
        url={'nyheter'}
      />
      {posts.length > 5 && (
        <button
          className={`${
            showHistory && 'hidden'
          } text-black hover:text-black focus:outline-none  shadow-lg rounded-lg py-3 px-5 mt-4 bg-saEmerald opacity-75 hover:opacity-100`}
          onClick={() => setshowHistory(!showHistory)}
        >
          Se fler nyheter
        </button>
      )}
    </>
  )
}

export default NewsPosts
