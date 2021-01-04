import { Node } from "gatsby"
import PostType from "../components/post"

export type PostType = {
  slug: string
  excerpt?: string
  body: string
  timeToRead?: number
  tableOfContents?: any
  frontmatter: PostFrontmatterType
}

export type PostFrontmatterType = {
  title: string
  date: string
  description?: string
  tags?: PostTagType[]
}

export type PostTagType = {
  name: string
  slug: string
}

export type PostsQuery = {
  posts: {
    nodes: PostType[]
  }
}
