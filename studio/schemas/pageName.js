export default {
  type: 'string',
  name: 'pageName',
  description: 'Namn på sidan. Används för länkarna i menyn.',
  validation: (Rules) => [Rules.required().error('Du måste ange ett namn')],
}
