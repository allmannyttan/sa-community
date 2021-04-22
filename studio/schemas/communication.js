import { RiPagesLine } from 'react-icons/ri'

export default {
  icon: RiPagesLine,
  name: 'communicationPage',
  type: 'document',
  title: 'Kommunikation',
  initialValue: {
    priority: 5,
  },
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    { type: 'priority', name: 'priority' },
    { type: 'pageName', name: 'pageName', title: 'Namn' },
    {
      type: 'heroImage',
      name: 'heroImage',
      title: 'Hero bild',
      description: 'Hero bild som visas stort längst upp på sidan',
    },
    {
      type: 'heroText',
      name: 'heroText',
      description: 'Denna text placeras i mitten av bilden',
    },
    { type: 'bodyPortableText', name: 'Body' },
    { type: 'keywords', name: 'keywords' },
  ],
  preview: {
    select: {
      title: 'pageName',
      subtitle: 'Body',
    },
    prepare({ title = 'Kommunikation', name = 'communication' }) {
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
