export default {
  name: 'aboutUsPage',
  type: 'document',
  title: 'Om oss',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    { type: 'bodyPortableText', name: 'Body' },
  ],
  preview: {
    select: {
      title: 'Om oss',
      name: 'name',
    },
    prepare({ title = 'Om oss', name = 'om oss' }) {
      const path = `/om-oss`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
