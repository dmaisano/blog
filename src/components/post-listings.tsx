import React from "react"
import { Post } from "../types"
import PostItem from "./post-item"

interface PostListingProps {
  posts: Post[]
  className?: string
  basePath: string
  showTags?: boolean
}

const PostListing: React.FC<PostListingProps> = ({
  posts,
  basePath,
  className = ``,
  showTags = true,
}) => {
  return (
    <article id="post-listing" sx={{ mb: [5, 6, 7] }} className={className}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          post={post}
          basePath={basePath}
          showTags={showTags}
        />
      ))}
    </article>
  )
}

export default PostListing
