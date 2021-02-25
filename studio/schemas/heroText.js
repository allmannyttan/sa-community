export default {
  type: 'object',
  title: 'Hero Text',
  name: 'heroText',

  fields: [
    { name: 'text', title: 'Text', type: 'string' },
    {
      name: 'color',
      title: 'Textfärg',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    },
  ],
}
