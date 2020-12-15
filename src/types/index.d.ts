import { Node } from "gatsby"

export type Post = {
  slug: string
  excerpt: string
  body: string
  timeToRead: number
  tableOfContents?: any
  frontmatter: PostFrontmatter
}

export type PostFrontmatter = {
  title: string
  date: string
  description?: string
  tags?: PostTag[]
}

export type PostTag = {
  name?: string
  slug?: string
}
