import React from 'react'
import ArticleSideMenu from './articleSideMenu'

const NewsPosts = ({ posts }) => {
  const [showHistory, setshowHistory] = React.useState(false)
  return (
    <>
      <ArticleSideMenu
        title={'Senaste nyheterna'}
        posts={showHistory ? posts : posts.slice(0, 5)}
        url={'news'}
      />
      <button
        className={`${
          showHistory && 'hidden'
        } text-gray-700 hover:text-black focus:outline-none py-2`}
        onClick={() => setshowHistory(!showHistory)}
      >
        Se fler nyheter
      </button>
    </>
  )
}

export default NewsPosts
