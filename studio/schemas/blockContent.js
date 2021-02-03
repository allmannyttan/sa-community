import { FiTag } from 'react-icons/fi'

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        // ...
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        decorators: [
          // ...
        ],
        annotations: [
          {
            title: 'Inline Icon',
            name: 'inlineicon',
            type: 'image',
            blockEditor: {
              icon: FiTag,
            },
          },
        ],
      },
    },
  ],
}
