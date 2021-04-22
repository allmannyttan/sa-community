import { RiPagesLine } from 'react-icons/ri'

export default {
  icon: RiPagesLine,
  name: 'newsPage',
  type: 'document',
  title: 'Nyheter',
  initialValue: {
    priority: 7,
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
      name: 'Body',
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
