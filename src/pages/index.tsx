import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps<GatsbyTypes.PostsQuery>> = (props) => {
  props.data.posts.nodes.forEach((node) => {
    console.log(node)
    return node
  })

  return (
    <Layout>
      <SEO title="Home" />

      <h1>Index Page</h1>

      <p>{JSON.stringify(props)}</p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Posts {
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "//content/posts/.*/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        excerpt
        timeToRead
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
