export default {
  name: 'editor',
  type: 'document',
  title: 'Redaktörer',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Namn',
    },
    {
      type: 'image',
      name: 'profileImage',
      title: 'Bild',
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      name: 'createdDateAsc',
      title: 'Created date new–>old',
      by: [
        {
          field: '_createdAt',
          direction: 'desc',
        },
      ],
    },
  ],
}
