// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import project from './project'
import siteSettings from './siteSettings'
import blockContent from './blockContent'
import blockImage from './blockImage'
import sectionLink from './sectionLink'
import slug from './slug'
import home from './home'
import about from './aboutUs'
import heroImage from './heroImage'
import focusArea from './focusArea'
import newsPost from './newsPost'
import editor from './editor'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    project,
    siteSettings,
    blockContent,
    blockImage,
    slug,
    sectionLink,
    home,
    heroImage,
    focusArea,
    about,
    newsPost,
    editor,
    /* Your types here! */
  ]),
})
