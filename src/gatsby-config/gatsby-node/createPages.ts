import { CreatePagesArgs } from "gatsby"
import { AllMdxQuery, TemplateMdx } from "../../types"
import { CONTENT_PATHS } from "../../utils"

export const createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions

  const result = await graphql<AllMdxQuery>(/* GraphQL */ `
    query {
      allMdx {
        nodes {
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

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts / pages`,
      result.errors
    )
    return
  }

  result.data?.allMdx.nodes.forEach((node) => {
    let component
    let context: TemplateMdx

    // use this to get the slug
    const mdxBasePath = new RegExp(`(${CONTENT_PATHS.join("|")})/`).exec(
      node.slug
    )?.[1]

    if (mdxBasePath === "posts") {
      component = require.resolve("../../templates/post.tsx")
      context = {
        body: node.body,
        timeToRead: node.timeToRead,
        frontmatter: node.frontmatter,
      }
    } else {
      return
    }

    createPage({
      path: `/${node.slug}`,
      component,
      context,
    })
  })
}
