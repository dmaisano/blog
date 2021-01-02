/** @jsx jsx */
import { Link as TLink, Text } from "@theme-ui/components"
import { graphql, PageProps } from "gatsby"
import React from "react"
import { jsx } from "theme-ui"
import SEO from "../components/seo"
import { useSiteMetadata } from "../hooks"

// TODO: infinite page scrolling for blog posts

const IndexPage: React.FC<PageProps<GatsbyTypes.PostsQuery>> = (props) => {
  console.log(props)

  const { title } = useSiteMetadata()

  return (
    <>
      <SEO title="Home" />

      <h1
        id="title"
        sx={{
          // include `px` so we can use it with `sx`
          border: 0,
          clip: `rect(0, 0, 0, 0)`,
          height: `1px`,
          margin: `-1px`,
          overflow: `hidden`,
          padding: 0,
          position: `absolute`,
          whiteSpace: `nowrap`,
          width: `1px`,
        }}
      >
        {title}
      </h1>

      <section
        id="hero"
        sx={{
          mb: [5, 6, 7],
          p: { fontSize: [1, 2, 3], mt: 2 },
          variant: `section_hero`,
        }}
      >
        <Text
          sx={{ fontSize: [4, 5, 6], fontWeight: `bold`, color: `heading` }}
        >
          Hi.
        </Text>
        <p>
          My name's Domenico - I'm a Full-Stack Developer &amp; Computer Science
          graduate from{" "}
          <TLink href="https://computing.njit.edu/" target="_blank">
            NJIT
          </TLink>
          .
        </p>
      </section>
    </>
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
