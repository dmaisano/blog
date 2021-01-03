/** @jsx jsx */
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import React from "react"
import { jsx } from "theme-ui"
import { Post } from "../types"

interface PostProps {
  post: Post
  showTags?: boolean
}

const Post: React.FC<PostProps> = ({ post, showTags }) => (
  <Box mb={4}>
    <Link to={post.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
      {post.frontmatter.title}
    </Link>
    <p
      sx={{
        color: `secondary`,
        mt: 1,
        a: { color: `secondary` },
        fontSize: [1, 1, 2],
      }}
    >
      <time>{post.frontmatter.date}</time>
      {/* {post.frontmatter.tags && showTags && (
        <>
          {` — `}
          <ItemTags tags={post.tags} />
        </>
      )} */}
    </p>
  </Box>
)

export default Post
