export default {
  name: 'heroImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
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
