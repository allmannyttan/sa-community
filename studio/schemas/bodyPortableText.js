import { AiOutlineLink } from 'react-icons/ai'

export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Body',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Extern länk',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                description:
                  'Länk till extern sajt, t.ex https://www.sverigesallmannytta.se/nyheter/',
              },
              {
                title: 'Öppna i ny flik',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Intern länk',
            blockEditor: {
              icon: AiOutlineLink,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                weak: true,
                title: 'Referens',
                description:
                  'Länk till någon av de andra posterna på sidan, t.ex ett projekt eller en nyhet.',
                to: [
                  { type: 'newsPost' },
                  { type: 'api' },
                  { type: 'project' },
                  { type: 'homePage' },
                  { type: 'aboutUsPage' },
                  { type: 'apiPage' },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'youtube',
    },
    { type: 'bodyImage' },
    {
      type: 'code',
    },
  ],
}
