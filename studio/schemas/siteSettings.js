export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Inställningar',
  fieldsets: [
    {
      name: 'social',
      title: 'Sociala medier och länkar',
      description: 'Det som fylls i här hamnar i footern.',
    },
    {
      name: 'seo',
      title: 'SEO',
      description: 'Sökmotorsoptimering',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Namn på sidan',
      fieldset: 'seo',
    },
    {
      name: 'URL',
      type: 'string',
      title: 'Länk till sidan',
      fieldset: 'seo',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivning',
      description: 'Beskriv sidan för sökmotorer och sociala medier.',
      fieldset: 'seo',
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
      fieldset: 'seo',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      fieldset: 'social',
    },
    {
      name: 'github',
      type: 'string',
      title: 'Github',
      fieldset: 'social',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook',
      fieldset: 'social',
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter',
      fieldset: 'social',
    },
  ],
}
