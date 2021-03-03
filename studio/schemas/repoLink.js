export default {
  type: 'object',
  title: 'Repo link',
  name: 'repoLink',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Länk',
    },
    {
      title: 'Länk till',
      name: 'linkTo',
      type: 'string',
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
