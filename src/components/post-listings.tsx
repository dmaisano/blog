import React from "react"
import { PostType } from "../types"
import Post from "./post"

interface PostListingProps {
  posts: PostType[]
  className?: string
  showTags: boolean
}

const PostListing: React.FC<PostListingProps> = ({
  posts,
  className = ``,
  showTags = true,
}) => {
  return (
    <article id="post-listing" sx={{ mb: [5, 6, 7] }} className={className}>
      {posts.map((post) => (
        <Post key={post.slug} post={post} showTags={showTags} />
      ))}
    </article>
  )
}

export default PostListing
