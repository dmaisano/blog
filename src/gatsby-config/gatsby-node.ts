/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

import { CreatePagesArgs, CreateWebpackConfigArgs } from "gatsby"
import { AllMdxQuery, TemplateMdx } from "../types"
import siteOptions from "./site-options"

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

export const createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions

  const {
    basePath,
    blogPath,
    tagsPath,
    formatString,
    postsPrefix,
  } = siteOptions

  const result = await graphql<AllMdxQuery>(/* GraphQL */ `
    query {
      allMdx {
        nodes {
          fileAbsolutePath
          slug
          body
          excerpt
          timeToRead
          frontmatter {
            title
            date
          }
        }
      }
    }
  `)

  result.data?.allMdx.nodes.forEach((node) => {
    const pageBasePath = node.fileAbsolutePath.match(
      /.*\/content\/(\w+)\/.*/
    )?.[1]

    let component
    let context: TemplateMdx
    if (pageBasePath === "posts") {
      component = require.resolve("../templates/post.tsx")
      context = {
        body: node.body,
        timeToRead: node.timeToRead,
        frontmatter: node.frontmatter,
      }
    } else {
      return
    }

    createPage({
      path: `/${pageBasePath}/${node.slug}`,
      component,
      context,
    })
  })
}
