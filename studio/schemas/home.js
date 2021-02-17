export default {
  name: 'homePage',
  type: 'document',
  title: 'Hem',
  __experimental_actions: ['update', 'publish', 'create'],
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
    {
      name: 'focusAreas',
      title: 'Fokusområden',
      type: 'array',
      of: [{ type: 'focusArea' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      name: 'name',
    },
    prepare({ title = 'Hem', name = 'home' }) {
      const path = `/`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
