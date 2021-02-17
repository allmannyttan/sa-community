import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import React from 'react'
import Layout from './src/components/layout/base'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onRouteUpdate = ({ location }) => {
  anchorScroll(location)
  return true
}
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  anchorScroll(location)
  return true
}

function anchorScroll(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    setTimeout(() => {
      // document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
      const item = document.querySelector(`${location.hash}`).offsetTop
      const mainNavHeight = document.querySelector(`nav`).offsetHeight
      window.scrollTo({
        top: item - mainNavHeight,
        left: 0,
      })
    }, 0)
  }
}
