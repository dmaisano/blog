import { PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import SEO from "../components/seo"
import { PostType } from "../types"

const PostTemplate: React.FC<PageProps<{}, PostType>> = (props) => {
  const { body, frontmatter, timeToRead } = props.pageContext

  return (
    <>
      <SEO title={frontmatter.title} />

      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export default PostTemplate
