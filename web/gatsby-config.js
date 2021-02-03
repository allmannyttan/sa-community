module.exports = {
  siteMetadata: {
    title: 'SA Dev',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'qo99b1oh',
        dataset: 'production',
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
}
