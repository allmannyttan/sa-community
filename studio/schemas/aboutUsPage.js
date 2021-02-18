export default {
  name: 'aboutUsPage',
  type: 'document',
  title: 'Om oss',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      type: 'title',
      name: 'title',
    },
    { type: 'bodyPortableText', name: 'Body' },
    { type: 'keywords', name: 'keywords' },
  ],
  preview: {
    select: {
      title: 'Om oss',
      name: 'name',
    },
    prepare({ title = 'Om oss', name = 'about' }) {
      const path = `/${name}`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
