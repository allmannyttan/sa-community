export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    { type: 'defaultSlug', name: 'slug' },
    {
      name: 'modules',
      title: 'Module Content',
      type: 'array',
      of: [{ type: 'image', title: 'Hero Image', name: 'heroImage' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'defaultSlug',
      name: 'name',
    },
    prepare({ title = 'No name', slug = {}, media }) {
      const path = `/${'slug.current'}`

      return {
        path,
        title,
        media,
        subtitle: path,
      }
    },
  },
}
