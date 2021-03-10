export default {
  name: 'project',
  type: 'document',
  title: 'Projekt',
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
      name: 'name',
    },
    prepare({ title = 'No name', slug = {}, media, name = 'project' }) {
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
