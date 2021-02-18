import { Link } from 'gatsby'
import React from 'react'
import * as Layout from '../../components/layout/'
import * as Typography from '../../components/typography'
import ArticleSideMenu from '../../components/articleSideMenu'

const Docs = () => {
  return (
    <Layout.FlexWrapper>
      <Layout.Aside></Layout.Aside>
      <Layout.Article>
        <Typography.H1>docs</Typography.H1>
        <Link></Link>
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Docs
