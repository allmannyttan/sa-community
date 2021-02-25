export default {
  type: 'string',
  title: 'Hero Text',
  name: 'heroText',
  description: 'Denna text placeras i mitten av startsidan',
  validation: (Rule) =>
    Rule.required().error('Här behöver du ange en hero text'),
}
