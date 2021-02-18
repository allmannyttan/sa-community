export default {
  name: 'apiPage',
  type: 'document',
  title: 'API',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    {
      type: 'titleString',
      name: 'title',
    },
    { type: 'bodyPortableText', name: 'Body' },
  ],
  preview: {
    select: {
      title: 'Api',
      name: 'name',
    },
    prepare({ title = 'Api', name = 'api' }) {
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
