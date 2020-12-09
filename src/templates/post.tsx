import { PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import SEO from "../components/seo"
import { TemplateMdx } from "../types"

const PostTemplate: React.FC<PageProps<{}, TemplateMdx>> = (props) => {
  const { body, frontmatter, timeToRead } = props.pageContext

  console.log(props)

  return (
    <>
      <SEO title={frontmatter.title} />

      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export default PostTemplate
