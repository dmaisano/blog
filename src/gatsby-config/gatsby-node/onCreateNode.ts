import { CreateNodeArgs } from "gatsby"
import { MdxNode } from "../../types"
import { CONTENT_PATHS, kebabCase } from "../../utils"

export const onCreateNode = async (args: CreateNodeArgs) => {
  const { actions, getNode, createNodeId, createContentDigest } = args
  const { createNode, createParentChildLink } = actions

  // ignore non-mdx nodes
  if (args.node.internal.type !== `Mdx`) {
    return
  }

  const node: MdxNode = args.node as MdxNode

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  const fileNode = getNode(node.parent as string)
  const source = fileNode.sourceInstanceName as string

  // Check if mdx file belongs to one of the valid content directories / paths
  if (node.internal.type === `Mdx`) {
    console.log(`Mdx node id === ${node.id}`)

    const slug = new RegExp(
      `/content/(?:${CONTENT_PATHS.join("|")})/(.*)\.mdx`
    ).exec(node.fileAbsolutePath)?.[1]

    console.log(`node.fileAbsolutePath: ${node.fileAbsolutePath}`)
    console.log(`node.slug: ${slug}`)

    const { title, date, tags, description } = node.frontmatter || {}

    let modifiedTags: any = null

    if (node.frontmatter?.tags) {
      modifiedTags = node.frontmatter.tags.map((tag) => ({
        name: tag,
        slug: kebabCase(tag),
      }))
    }

    const fieldData = {
      slug,
      title,
      date,
      tags,
      description,
    }

    const mdxPostId = createNodeId(`${node.id} >>> MdxPost`)

    const foo = {
      ...fieldData,
      id: mdxPostId,
      children: [],
      internal: {
        type: `MdxPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Post interface`,
      },
    }

    createNode(foo)

    console.log(`Creating Node: `)
    console.log(JSON.stringify(foo))

    createParentChildLink({ parent: node, child: getNode(mdxPostId) })
  }
}
