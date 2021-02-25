export default {
  name: 'communicationPage',
  type: 'document',
  title: 'Kommunikation',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    { type: 'pageName', name: 'pageName', title: 'Namn' },
    {
      type: 'heroImage',
      name: 'heroImage',
      title: 'Hero bild',
      description: 'Hero bild som visas stort längst upp på sidan',
    },
    {
      type: 'heroText',
      name: 'heroText',
      description: 'Denna text placeras i mitten av bilden',
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
