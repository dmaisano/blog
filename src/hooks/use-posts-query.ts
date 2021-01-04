import { graphql, useStaticQuery } from "gatsby"
import { PostType } from "../types"

export const usePostsQuery = (): PostType[] => {
  const { posts } = useStaticQuery<{
    posts: {
      nodes: PostType[]
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
