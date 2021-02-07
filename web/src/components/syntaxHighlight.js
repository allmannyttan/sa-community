import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Component = ({ code, language }) => (
  <SyntaxHighlighter style={a11yDark} language={language || 'text'}>
    {code}
  </SyntaxHighlighter>
)

export default Component
