export default {
  name: 'newsPost',
  type: 'document',
  title: 'Nyheter',
  fields: [
    {
      type: 'titleString',
      name: 'title',
    },
    {
      type: 'text',
      title: 'En kortare beskrivning av vad artikeln handlar om.',
      name: 'SEOText',
      description: 'Denna text används för SEO.',
    },
    { type: 'defaultSlug', name: 'slug' },
    { type: 'bodyPortableText', name: 'Body' },
    {
      name: 'author',
      type: 'reference',
      title: 'Redaktör',
      to: [{ type: 'editor' }],
    },
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
      name: 'name',
    },
    prepare({ title = 'No name', slug = {}, media, name = 'nyheter' }) {
      const path = `/nyheter/${slug.current}`

      return {
        path,
        title,
        media,
        subtitle: path,
      }
    },
  },
}
