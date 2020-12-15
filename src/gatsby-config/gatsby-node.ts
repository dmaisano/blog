/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

import { CreatePagesArgs, CreateWebpackConfigArgs } from "gatsby"
import { Post } from "../types/"

export const createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions

  const result = await graphql<any>(/* GraphQL */ `
    query Posts {
      posts: allMdx(
        filter: { fileAbsolutePath: { regex: "//content/posts/.*/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          slug
          excerpt
          body
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts / pages`,
      result.errors
    )
    return
  }

  result.data?.posts.nodes.forEach((node: Post) => {
    const component = require.resolve("../templates/post.tsx")
    const context = node

    createPage({
      path: `/${node.slug}`,
      component,
      context,
    })
  })
}

// replacing react-dom with @hot-loader/react-dom during development
export const onCreateWebpackConfig = ({
  getConfig,
  stage,
}: CreateWebpackConfigArgs) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}
