import { graphql, useStaticQuery } from "gatsby"
import { Post } from "../types"

export const usePostsQuery = (): Post[] => {
  const { posts } = useStaticQuery<{
    posts: {
      nodes: Post[]
    }
  }>(graphql`
    query FetchPosts {
      posts: allMdx(
        filter: { fileAbsolutePath: { regex: "//content/posts/.*/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          slug
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return posts.nodes
}
