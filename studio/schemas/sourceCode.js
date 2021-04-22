import { RiPagesLine } from 'react-icons/ri'

export default {
  icon: RiPagesLine,
  name: 'sourceCodePage',
  type: 'document',
  title: 'Källkod',
  initialValue: {
    priority: 4,
  },
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    { type: 'priority', name: 'priority', hidden: true },
    { type: 'pageName', name: 'pageName', title: 'Namn' },
    { type: 'bodyPortableText', name: 'Body' },
    { type: 'keywords', name: 'keywords' },
  ],
  preview: {
    select: {
      title: 'pageName',
      subtitle: 'Body',
    },
    prepare({ title = 'Källkod', name = 'kallkod' }) {
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
