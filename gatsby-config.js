module.exports = {
  siteMetadata: {
    title: `dmaisano`,
    description: `Personal Blog`,
    author: `@dmaisano`,
    externalLinks: [
      {
        name: `Github`,
        url: `https://github.com/dmaisano`,
      },
    ],
    navigation: [`Posts`, `About`],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Sans`, `Roboto`],
        display: "swap",
      },
    },
  ],
}
