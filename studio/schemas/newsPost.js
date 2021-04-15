export default {
  name: 'newsPost',
  type: 'document',
  title: 'Nyheter',
  fields: [
    {
      type: 'title',
      name: 'title',
    },
    {
      type: 'text',
      title: 'Kortare beskrivning',
      name: 'description',
      description: 'Används för förhandsvisning och för SEO.',
    },
    { type: 'defaultSlug', name: 'slug' },
    { type: 'bodyPortableText', name: 'Body' },
    {
      title: 'Datum',
      name: 'datePicker',
      type: 'date',
      description: 'Välj ett datum för nyheten.',
      validation: (Rule) =>
        Rule.required().error('Här behöver du ange ett datum för nyheten'),
    },

    {
      name: 'author',
      type: 'reference',
      weak: true,
      title: 'Redaktör',
      to: [{ type: 'editor' }],
    },
    { type: 'keywords', name: 'keywords' },
  ],
  orderings: [
    {
      name: 'createdDateAsc',
      title: 'Created date new–>old',
      by: [
        {
          field: '_createdAt',
          direction: 'desc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'bodyImage',
      subtitle: 'description',
    },
    prepare({ title = 'No name', slug = {}, media, name = 'news' }) {
      const path = `/${name}/${slug.current}`

      return {
        path,
        title,
        media,
        subtitle: path,
      }
    },
  },
}
