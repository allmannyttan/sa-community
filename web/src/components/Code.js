import React from 'react'

const Component = ({ node }) => {
  if (!node || !node.code) {
    return null
  }
  const { language, code } = node
  return (
    <div>
      language = {language}
      <pre>{code}</pre>
    </div>
  )
}

export default Component
