import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Component = ({ code, language }) => (
  <div className="max-w-xl">
    <SyntaxHighlighter style={a11yDark} language={language || 'text'}>
      {code}
    </SyntaxHighlighter>
  </div>
)

export default Component
