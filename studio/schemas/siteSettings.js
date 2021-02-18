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
      name: 'URL',
      type: 'string',
      title: 'Länk till sidan',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivning',
      description: 'Beskriv sidan för sökmotorer och sociala medier.',
    },
    { type: 'keywords', name: 'keywords' },
  ],
}
