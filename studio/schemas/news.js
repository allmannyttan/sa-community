export default {
  name: 'newsPage',
  type: 'document',
  title: 'Nyheter',
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
      title: 'Nyheter',
      name: 'name',
    },
    prepare({ title = 'Nyheter', name = 'nyheter' }) {
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
