import dotenv from "dotenv"
import { existsSync, openSync, writeFileSync } from "fs"
import { join } from "path"

const PROJECT_ROOT = join(__dirname, "../../")
const NODE_ENV = process.env.NODE_ENV as "development" | "production"
const ENV_FILE_PATH = join(__dirname, `../../.env.${NODE_ENV}`)

try {
  if (!existsSync(ENV_FILE_PATH)) {
    openSync(ENV_FILE_PATH, "w")

    if (NODE_ENV === "development") {
      writeFileSync(ENV_FILE_PATH, `GATSBY_GRAPHQL_IDE=playground`)
    }
  }
} catch (err) {
  console.log(err)
}

dotenv.config({ path: ENV_FILE_PATH })

export default {
  siteMetadata: {
    title: `dmaisano`,
    siteTitle: `dmaisano`,
    description: `Personal Blog`,
    author: `@dmaisano`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${PROJECT_ROOT}/content/posts`,
        name: `posts`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
