export default {
  name: 'apiPage',
  type: 'document',
  title: 'API',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      type: 'heroImage',
      name: 'heroImage',
      title: 'Hero bild',
      description: 'Hero bild som visas stort längst upp på sidan.',
    },
    {
      type: 'text',
      title: 'Hero text',
      name: 'heroText',
      description: 'Denna text placeras i mitten av hero:n',
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
