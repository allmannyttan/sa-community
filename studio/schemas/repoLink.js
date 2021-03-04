export default {
  type: 'object',
  title: 'Repo link',
  name: 'repoLink',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Länk',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Länk till',
      name: 'linkTo',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'GitHub', value: 'github' },
          { title: 'GitLab', value: 'gitlab' },
          { title: 'BitBucket', value: 'bitbucket' },
        ],
      },
    },
  ],
}
