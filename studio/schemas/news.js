export default {
  name: 'newsPage',
  type: 'document',
  title: 'Nyheter',
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
