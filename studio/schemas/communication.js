export default {
  name: 'communicationPage',
  type: 'document',
  title: 'Kommunikation',
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
      title: 'Kommunikation',
      name: 'name',
    },
    prepare({ title = 'Kommunikation', name = 'communication' }) {
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
