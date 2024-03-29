require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Allmännyttans digitaliseringsinitiativ',
    description: 'Allmännyttans digitaliseringsinitiativet',
    url: 'https://www.digitaliseringsinitiativet.se',
    keywords: ['Sveriges Allmännytta', 'SADev', 'SA', 'SA-DEV'],
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'qo99b1oh',
        dataset: 'production',
        token: process.env.SANITY_READ_DATA_TOKEN,
        // watchMode: process.env.NODE_ENV === 'development',
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'UA-110655153-3', // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-optional-chaining`,
    // `gatsby-plugin-nullish-coalescing-operator`,
  ],
}
