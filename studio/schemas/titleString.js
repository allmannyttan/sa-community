export default {
  name: 'titleString',
  type: 'string',
  title: 'title',
  description: 'Provide a title for the page',
  validation: (Rules) => Rules.required().error('Provide a title'),
}
