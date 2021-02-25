export default {
  name: 'sourceCodePage',
  type: 'document',
  title: 'Källkod',
  __experimental_actions: ['update', 'publish', 'create'],
  initialValue: () => ({
    tableOfContents: true,
  }),
  fields: [
    { type: 'pageName', name: 'pageName', title: 'Namn' },
    { type: 'bodyPortableText', name: 'Body' },
    { type: 'tableOfContents', name: 'tableOfContents' },
    { type: 'keywords', name: 'keywords' },
  ],
  preview: {
    select: {
      title: 'Källkod',
      name: 'name',
    },
    prepare({ title = 'Källkod', name = 'source-code' }) {
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
