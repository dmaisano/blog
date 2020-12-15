import { Node } from "gatsby"

interface MdxFrontMatter extends Post {
  tags: string[]
}

export interface MdxNode extends Node {
  fileAbsolutePath: string
  frontmatter: MdxFrontMatter
}

export type PostTag = {
  name?: string
  slug?: string
}

// Post frontmatter
export interface Post {
  id: string
  slug: string
  title: string
  date?: Date
  excerpt: string
  body: string
  html?: string
  timeToRead: number
  tags?: PostTag[]
  description?: string
}

export interface MdxPost extends Post {}

export type AllMdxQuery = {
  allMdx: {
    nodes: MdxNode[]
  }
}

export interface MdxNode extends TemplateMdx {
  fileAbsolutePath: string
  slug: string
  excerpt: string
  TemplateMdx
}

export type MdxFrontMatter = {
  title: string
  date: string
}

export type TemplateMdx = {
  body: string
  timeToRead: number
  frontmatter: MdxFrontMatter
}
