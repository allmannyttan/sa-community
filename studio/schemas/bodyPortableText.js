import { AiOutlineLink } from 'react-icons/ai'

export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Body',
  of: [
    {
      type: 'block',
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
                title: 'Referens',
                description:
                  'Länk till någon av de andra posterna på sidan, t.ex ett projekt eller en nyhet.',
                to: [
                  { type: 'newsPost' },
                  { type: 'project' },
                  { type: 'homePage' },
                  { type: 'aboutUsPage' },
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