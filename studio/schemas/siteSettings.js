export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Inställningar',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Namn på sidan',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivning',
      description: 'Beskriv sidan för sökmotorer och sociala medier.',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Lägg till keywords som du vill associera med denna sida.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
}
