export default {
  name: 'getStarted',
  type: 'document',
  title: 'Kom igång',
  fields: [
    {
      type: 'image',
      name: 'icon',
      title: 'Ikon',
      description: 'Mindre bild som visas ovarnför informationen',
    },
    {
      type: 'string',
      name: 'heading',
      title: 'Rubrik',
      validation: (Rule) => [
        Rule.required(),
        Rule.max(25).warning('En kortare rubrik är bättre'),
      ],
    },
    {
      type: 'text',
      name: 'content',
      title: 'Text',
      description: 'Lägg till en kortare beskrivning',
      validation: (Rule) => Rule.required().min(120).max(200),
    },
    {
      type: 'string',
      name: 'cta',
      title: 'Knapp',
      description: 'Namn på knapp som leder till en sida',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'url',
      title: 'Skicka användaren hit',
      description:
        'Rutt till undersidan du vill länka till. T.ex news, docs/api',
      validation: (Rule) => Rule.required(),
    },
  ],
}
