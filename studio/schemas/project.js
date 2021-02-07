export default {
  name: 'project',
  type: 'document',
  title: 'Projekt',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    { type: 'defaultSlug', name: 'slug' },
    { type: 'bodyPortableText', name: 'Body' },
    {
      title: 'Table of contents',
      type: 'boolean',
      name: 'tableOfContents',
      description:
        'If "On", the page will have a sidebar with a table of contents section that the user can click and get redirected to a certain section on the page. This is done automatically by generating links from all of the headings in the article.',
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
    prepare({ title = 'No name', slug = {}, media, name = 'projekt' }) {
      const path = `/projekt/${slug.current}`

      return {
        path,
        title,
        media,
        subtitle: path,
      }
    },
  },
}
