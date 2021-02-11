export default {
  name: 'sourceCodePage',
  type: 'document',
  title: 'Källkod',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      type: 'titleString',
      name: 'title',
    },
    { type: 'bodyPortableText', name: 'Body' },
  ],
  preview: {
    select: {
      title: 'Källkod',
      name: 'name',
    },
    prepare({ title = 'Källkod', name = 'källkod' }) {
      const path = `/kallkod`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
