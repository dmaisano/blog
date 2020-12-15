import { CreateSchemaCustomizationArgs } from "gatsby"
import { kebabCase } from "lodash"

const mdxResolverPassthrough = (fieldName) => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

export const createSchemaCustomization = ({
  actions,
  schema,
  reporter,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes, createFieldExtension } = actions

  const slugify = (source) => {
    const slug = source.slug ? source.slug : kebabCase(source.title)

    return `/${slug}`.replace(/\/\/+/g, `/`)
  }

  createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve: slugify,
      }
    },
  })

  createFieldExtension({
    name: `mdxpassthrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      }
    },
  })

  createTypes([
    /* GraphQL */ `
      interface Post @nodeInterface {
        id: ID!
        slug: String! # could optionally @slugify, currently using file name as slug
        title: String!
        date: Date! @dateformat
        excerpt(pruneLength: Int = 160): String!
        body: String!
        html: String
        timeToRead: Int
        tags: [PostTag]
        # banner: File @fileByRelativePath
        description: String
        # canonicalUrl: String
      }

      type PostTag {
        name: String
        slug: String
      }

      type MdxPost implements Node & Post {
        slug: String! @slugify
        title: String!
        date: Date! @dateformat
        excerpt(pruneLength: Int = 140): String!
          @mdxpassthrough(fieldName: "excerpt")
        body: String! @mdxpassthrough(fieldName: "body")
        html: String! @mdxpassthrough(fieldName: "html")
        timeToRead: Int @mdxpassthrough(fieldName: "timeToRead")
        tags: [PostTag]
        # banner: File @fileByRelativePath
        description: String
        # canonicalUrl: String
      }
    `,
  ])
}
