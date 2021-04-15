import { RiPagesLine } from 'react-icons/ri'

export default {
  icon: RiPagesLine,
  name: 'manifestPage',
  type: 'document',
  title: 'Manifest',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    { type: 'pageName', name: 'pageName', title: 'Namn' },
    { type: 'bodyPortableText', name: 'Body' },
    { type: 'keywords', name: 'keywords' },
  ],
  preview: {
    select: {
      title: 'pageName',
      name: 'Body',
    },
    prepare({ title = 'Manifest', name = 'manifest' }) {
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
