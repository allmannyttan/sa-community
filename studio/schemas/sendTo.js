export default {
  title: 'Skicka användaren hit',
  name: 'sendTo',
  type: 'object',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      title: 'Referens',
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
}
