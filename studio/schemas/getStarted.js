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
    },
    {
      type: 'text',
      name: 'content',
      title: 'Text',
    },
    {
      type: 'string',
      name: 'cta',
      title: 'Knapp',
      description: 'Namn på knapp som leder till en sida',
    },
    {
      title: 'Skicka användaren hit',
      description:
        'Rutt till undersidan du vill länka till. T.ex news, communication, docs/api eller en specifik post',
      name: 'reference',
      weak: true,
      type: 'array',
      of: [
        {
          type: 'reference',
          description:
            'Sök på den sidan du vill länka till. T.ex news, communication, docs/api eller en specifik post',
          to: [
            { type: 'aboutUsPage' },
            { type: 'newsPage' },
            { type: 'projectPage' },
            { type: 'api' },
            { type: 'communicationPage' },
            { type: 'apiPage' },
            { type: 'newsPost' },
            { type: 'project' },
          ],
        },
      ],
    },
  ],
}
