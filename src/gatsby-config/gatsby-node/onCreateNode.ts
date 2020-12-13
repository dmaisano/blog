import { CreateNodeArgs, SourceNodesArgs } from "gatsby"
import { CONTENT_PATHS, kebabCase } from "../../utils"

export const onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}: CreateNodeArgs) => {
  const { createNode, createParentChildLink } = actions

  // ignore non-mdx nodes
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  const fileNode = getNode(node.parent as string)
  const source = fileNode.sourceInstanceName as string

  // Check if mdx file belongs to one of the valid content directories / paths
  if (node.internal.type === `Mdx` && CONTENT_PATHS.includes(source)) {
    let modifiedTags: any = null

    if ((node.frontmatter as any).tags) {
      modifiedTags = ((node.frontmatter as any).tags as any[]).map((tag) => ({
        name: tag,
        slug: kebabCase(tag),
      }))
    }
  }
}
