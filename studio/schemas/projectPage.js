export default {
  name: 'projectPage',
  type: 'document',
  title: 'Projekt',
  __experimental_actions: ['update', 'publish', 'create'],
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
      title: 'Projekt',
      name: 'name',
    },
    prepare({ title = 'Projekt', name = 'projekt' }) {
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
