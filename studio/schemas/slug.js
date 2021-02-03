export default {
  name: 'defaultSlug',
  type: 'slug',
  title: 'Slug',
  description:
    'Used to create a page for the content. Should be same as title but with dashes instead of space and lowercase. Press [Generate] after you have filled out the title to do this automatically.',
  options: {
    source: 'title',
    maxLength: 96,
  },
}
