import { join } from "path"

const rootDir = join(__dirname, `../../`)

const siteMetadata = {
  title: `dmaisano`,
  description: `Personal Blog`,
  author: `@dmaisano`,
  basePath: `/`,
  blogPath: `/posts`,
  tagsPath: `/tags`,
  externalLinks: [
    {
      name: `Github`,
      url: `https://github.com/dmaisano`,
    },
  ],
  navigation: [`Posts`, `About`],
}

export default {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${rootDir}/content`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dmaisano`,
        short_name: `dmaisano`,
        start_url: `/`,
        background_color: `#3865ef`,
        theme_color: `#3865ef`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

export type SiteMetadata = typeof siteMetadata
