/** @jsx jsx */
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import React from "react"
import { jsx } from "theme-ui"
import { Post } from "../types"
import { replaceSlashes } from "../utils"
import ItemTags from "./item-tags"

interface PostItemProps {
  post: Post
  basePath: string
  showTags?: boolean
}

const PostItem: React.FC<PostItemProps> = ({ post, basePath, showTags }) => {
  return (
    <Box mb={4}>
      <Link
        to={replaceSlashes(`/${basePath}/${post.slug}`)}
        sx={{ fontSize: [1, 2, 3], color: `text` }}
      >
        {post.frontmatter.title}
      </Link>
      <p
        sx={{
          color: `accent`,
          mt: 1,
          a: { color: `accent` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{post.frontmatter.date}</time>
        {post.frontmatter.tags && showTags && (
          <>
            {` — `}
            <ItemTags tags={post.frontmatter.tags} />
          </>
        )}
      </p>
    </Box>
  )
}

export default PostItem
