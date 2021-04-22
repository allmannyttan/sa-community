import { RiPagesLine } from 'react-icons/ri'

export default {
  name: 'homePage',
  type: 'document',
  title: 'Hem',
  initialValue: {
    priority: 1,
  },
  icon: RiPagesLine,
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    { type: 'priority', name: 'priority', hidden: true },

    { type: 'pageName', name: 'pageName', title: 'Namn' },
    {
      type: 'heroText',
      name: 'heroText',
      description: 'Denna text placeras i mitten av startsidan',
      validation: (Rule) =>
        Rule.required().error('Här behöver du ange en text'),
    },
    {
      type: 'string',
      title: 'Kortare beskrivning',
      name: 'description',
      description:
        'En kortare beskrivning som ligger under titlen på startsidan',
    },
    {
      name: 'getStarted',
      title: 'Kom igång',
      type: 'array',
      of: [{ type: 'getStarted' }],
      validation: (Rule) =>
        Rule.custom((blocks) => {
          if (blocks.length > 3)
            return 'Max antal block har lagts till. Ändra eller ta bort något av de som redan är inlagda'
          return true
        }),
    },
    {
      name: 'focusAreas',
      title: 'Fokusområden',
      type: 'array',
      of: [{ type: 'focusArea' }],
    },
    { type: 'keywords', name: 'keywords' },
  ],
  preview: {
    select: {
      title: 'pageName',
      subtitle: 'description',
    },
    prepare({ title = 'Hem', name = 'home' }) {
      const path = `/`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
