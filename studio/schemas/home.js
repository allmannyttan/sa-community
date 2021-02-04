export default {
  name: 'homePage',
  type: 'document',
  title: 'Hem',
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
      slug: 'slug',
      media: 'blockImage',
      name: 'name',
    },
    prepare({ title = 'No name', slug = {}, media, name = 'project' }) {
      const path = `/${name}/${slug.current}`

      return {
        path,
        title,
        media,
        subtitle: path,
      }
    },
  },
}
