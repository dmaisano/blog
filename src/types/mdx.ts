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
