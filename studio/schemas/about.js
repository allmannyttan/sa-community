import { BsCardImage } from 'react-icons/bs'
export default {
  name: 'aboutUs',
  type: 'document',
  title: 'Om oss',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Rich text',
      type: 'array',
      name: 'richText',
      of: [{ type: 'block' }, { type: 'blockImage', icon: BsCardImage }],
    },
  ],
  preview: {
    select: {
      title: 'Om oss',
      name: 'name',
    },
    prepare({ title = 'Om oss', name = 'om oss' }) {
      const path = `/om-oss`
      return {
        path,
        name,
        title,
        subtitle: path,
      }
    },
  },
}
