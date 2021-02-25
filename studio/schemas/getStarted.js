export default {
  name: 'getStarted',
  type: 'document',
  title: 'Kom igång',
  fields: [
    {
      type: 'image',
      name: 'icon',
      title: 'Ikon',
      description: 'Mindre bild som visas ovarnför rubriken',
    },
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
      type: 'string',
      name: 'cta',
      title: 'Knapp',
      description: 'Namn på knapp som leder till en sida',
      validation: (Rule) => Rule.required().error('Du måste ange ett namn'),
    },
    {
      title: 'Länk till',
      type: 'sendTo',
      name: 'sendTo',
      validation: (Rule) => Rule.required(),
    },
  ],
}
