import { BsCardImage } from 'react-icons'

export default {
  name: 'newsPost',
  type: 'document',
  title: 'Nyheter',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    { type: 'defaultSlug', name: 'slug' },
    {
      title: 'Rich text',
      type: 'array',
      name: 'richText',
      of: [{ type: 'block' }, { type: 'blockImage', icon: BsCardImage }],
    },
    {
      name: 'author',
      title: 'Redaktör',
      type: 'array',
      of: [
        {
          name: 'reference',
          type: 'reference',
          title: 'Redaktör',
          to: [
            { type: 'editor' },
            // other types you may want to link to
          ],
        },
      ],
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
      media: 'blockImage',
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
