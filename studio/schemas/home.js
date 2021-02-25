export default {
  name: 'homePage',
  type: 'document',
  title: 'Hem',
  __experimental_actions: ['update', 'publish', 'create'],
  fields: [
    { type: 'pageName', name: 'pageName', title: 'Namn' },
    {
      type: 'string',
      title: 'Hero Text',
      name: 'heroText',
      description: 'Denna text placeras i mitten av startsidan',
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
      title: 'title',
      name: 'name',
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
