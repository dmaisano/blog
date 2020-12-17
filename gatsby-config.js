module.exports = {
  siteMetadata: {
    title: `dmaisano`,
    description: `Personal Blog`,
    author: `@dmaisano`,
    externalLinks: [`Github`],
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
  ],
}
