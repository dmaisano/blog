/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

/**
 * @param {import('gatsby').CreatePagesArgs} args
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(/* GraphQL */ `
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

  result.data?.posts.nodes.forEach((node) => {
    const component = require.resolve(`${__dirname}/src/templates/post.tsx`)
    const context = node

    createPage({
      path: `/${node.slug}`,
      component,
      context,
    })
  })
}

// replacing react-dom with @hot-loader/react-dom during development
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}
