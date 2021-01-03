import { join } from "path"

const rootDir = join(__dirname, `../../`)

const siteMetadata = {
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
}

export default {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-typegen`,
    //   options: {},
    // },
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
  ],
}

export type SiteMetadata = typeof siteMetadata
