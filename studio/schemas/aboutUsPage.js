export default {
  name: 'aboutUsPage',
  type: 'document',
  title: 'Om oss',
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
    {
      type: 'title',
      name: 'title',
    },
    { type: 'bodyPortableText', name: 'Body' },
    { type: 'keywords', name: 'keywords' },
  ],
  preview: {
    select: {
      title: 'Om oss',
      name: 'name',
    },
    prepare({ title = 'Om oss', name = 'about' }) {
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
