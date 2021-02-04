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
}
