import { BsCardImage } from 'react-icons'

export default {
  name: 'sideMenu',
  type: 'document',
  title: 'Side Menu',
  fields: [
    {
      name: 'sideMenuWithLinks',
      title: 'Side menu with links',
      type: 'array',
      of: [
        {
          name: 'reference',
          type: 'reference',
          title: 'Reference',
          to: [
            { type: 'project' },
            // other types you may want to link to
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'baseImage',
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
