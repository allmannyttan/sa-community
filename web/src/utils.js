const moment = require('moment')
export const isObject = (item) => {
  return typeof item !== 'object' && item !== null
    ? slugify(item)
    : slugify(item.props.node.children)
}

export const slugify = (str) => {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export const getRouteNameFromContentType = (contentType) => {
  switch (contentType) {
    case 'newsPost':
      return 'news'
    case 'project':
      return 'project'
    case 'api':
      return 'api'
    default:
      return '404'
  }
}

export const getRouteNameFromPageType = (contentType) => {
  switch (contentType) {
    case 'homePage':
      return ''
    case 'aboutUsPage':
      return 'about'
    case 'communicationPage':
      return 'communication'
    case 'apiPage':
      return 'api'
    case 'projectPage':
      return 'project'
    case 'manifestPage':
      return 'manifest'
    case 'newsPage':
      return 'news'
    case 'sourceCodePage':
      return 'source-code'
    default:
      return '404'
  }
}

export const dateToHumanReadable = (d) => {
  const date = new Date(d)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const monthName = months[date.getMonth()]

  return `${date.getDate()} ${monthName} ${date.getFullYear()}`
}

export const getLinkPathFromPageData = ([name, { pageName }]) => {
  switch (name) {
    case 'sanityProjectPage':
      return { pageName, path: '/project' }
    case 'sanityApiPage':
      return { pageName, path: '/api' }
    case 'sanityNewsPage':
      return { pageName, path: '/news' }
    case 'sanityAboutUsPage':
      return { pageName, path: '/about' }
    case 'sanityCommunicationPage':
      return { pageName, path: '/communication' }
    case 'sanitySourceCodePage':
      return { pageName, path: '/source-code' }
    case 'sanityManifestPage':
      return { pageName, path: '/manifest' }
    case 'sanityHomePage':
      return { pageName, path: '/' }
    default:
      return '/'
  }
}

const today = moment().format('YYYY-MM-DD')

export const isDateTodayOrBefore = (date) => {
  return moment(date).isSameOrBefore(today)
}
