export default {
  name: 'linkCard',
  type: 'document',
  title: 'Kort med länk',
  fields: [
    {
      type: 'string',
      name: 'heading',
      title: 'Rubrik',
      validation: (Rule) => [
        Rule.required().error('Du måste ange en rubrik'),
        Rule.max(25).warning('En kortare rubrik är bättre'),
      ],
    },
    {
      type: 'text',
      name: 'content',
      title: 'Text',
      description: 'Lägg till en kortare beskrivning',
      validation: (Rule) => [
        Rule.required().error('Du måste lägga in en beskrivning här'),
        Rule.min(10).max(150),
      ],
    },
    {
      title: 'Länk till',
      type: 'string',
      name: 'link',
      validation: (Rule) => Rule.required(),
    },
  ],
}
