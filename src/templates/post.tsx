import { PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import SEO from "../components/seo"
import { Post } from "../types"

const PostTemplate: React.FC<PageProps<{}, Post>> = (props) => {
  const { body, frontmatter, timeToRead } = props.pageContext

  return (
    <>
      <SEO title={frontmatter.title} />

      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export default PostTemplate
