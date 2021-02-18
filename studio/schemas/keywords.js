export default {
  name: 'keywords',
  type: 'array',
  title: 'Keywords',
  description:
    'Lägg till keywords som du vill associera med denna sida. Viktigt för SEO. Skriv något och tryck enter för att skapa ett keyword.',
  of: [{ type: 'string' }],
  options: {
    layout: 'tags',
  },
}
