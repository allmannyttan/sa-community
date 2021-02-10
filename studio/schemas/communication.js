export default {
  name: 'communicationPage',
  type: 'document',
  title: 'Kommunikation',
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
      title: 'Kommunikation',
      name: 'name',
    },
    prepare({ title = 'Kommunikation', name = 'kommunikation' }) {
      const path = `/kommunikation`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
