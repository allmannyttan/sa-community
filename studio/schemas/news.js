export default {
  name: 'newsPage',
  type: 'document',
  title: 'Nyheter',
  __experimental_actions: ['update', 'publish', 'create'],
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
      title: 'Nyheter',
      name: 'name',
    },
    prepare({ title = 'Nyheter', name = 'news' }) {
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
