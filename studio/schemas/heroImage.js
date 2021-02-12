export default {
  name: 'heroImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  validation: (Rules) =>
    Rules.custom((fields) => {
      console.log(fields)
      if (!fields.asset) return 'Pleace provide a hero image'
      if (!fields.alt) return 'Provide a alternative text for the image'
      return true
    }),
  fields: [
    {
      type: 'string',
      name: 'alt',
      title: 'Alternativ text',
      description: `Beskrivande text för personer med någon form av synsvårigheter.`,
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}
