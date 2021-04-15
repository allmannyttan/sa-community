export default {
  name: 'api',
  type: 'document',
  title: 'API:er',
  fields: [
    {
      type: 'title',
      name: 'title',
    },
    { type: 'defaultSlug', name: 'slug' },
    {
      type: 'text',
      title: 'Kortare beskrivning',
      name: 'description',
      description: 'Används för förhandsvisning och för SEO.',
    },
    { type: 'bodyPortableText', name: 'Body' },
    { type: 'keywords', name: 'keywords' },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
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
      subtitle: 'description',
    },
    prepare({ title = 'Api', slug = {}, media, name = 'api' }) {
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
