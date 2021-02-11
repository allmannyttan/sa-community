export default {
  name: 'defaultSlug',
  type: 'slug',
  title: 'Slug',
  description:
    'Used to create a page for the content. Should be same as title but with dashes instead of space and lowercase. Press [Generate] after you have filled out the title to do this automatically.',
  validation: (Rules) => [
    Rules.required().error('Provide a slug'),
    Rules.max(96).warning('Shorter slugs are more convenient'),
  ],
  options: {
    source: 'title',
    maxLength: 96,
  },
}
