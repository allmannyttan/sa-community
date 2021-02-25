export default {
  name: 'focusArea',
  type: 'document',
  title: 'Fokusområde',
  fields: [
    {
      type: 'string',
      name: 'heading',
      title: 'Rubrik',
      validation: (Rule) => [
        Rule.required(),
        Rule.max(30).warning('En kortare rubrik är bättre'),
      ],
    },
    {
      type: 'text',
      name: 'content',
      title: 'Text',
      validation: (Rule) => Rule.required().min(100),
    },
  ],
}
