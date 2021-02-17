export default {
  name: 'projectPage',
  type: 'document',
  title: 'Projekt',
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
      title: 'Projekt',
      name: 'name',
    },
    prepare({ title = 'Projekt', name = 'project' }) {
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
