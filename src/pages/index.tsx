/** @jsx jsx */
import { Link as TLink, Text } from "@theme-ui/components"
import { Link, PageProps } from "gatsby"
import React from "react"
import { jsx } from "theme-ui"
import PostListing from "../components/post-listings"
import SEO from "../components/seo"
import Title from "../components/title"
import { useSiteMetadata } from "../hooks"
import { usePostsQuery } from "../hooks/use-posts-query"
import { visuallyHidden } from "../styles"
import { replaceSlashes } from "../utils"

// TODO: infinite page scrolling for blog posts

const IndexPage: React.FC<PageProps> = ({}) => {
  const { basePath, blogPath, title } = useSiteMetadata()
  const posts = usePostsQuery()

  return (
    <>
      <SEO title="Home" />

      <h1 id="title" sx={visuallyHidden}>
        {title}
      </h1>

      <section
        id="hero"
        sx={{
          mb: [5, 6],
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
          My name is Dom. I'm a Full-Stack Developer &amp; Computer Science
          graduate from{" "}
          <TLink href="https://computing.njit.edu/" target="_blank">
            NJIT
          </TLink>
          . I am currently seeking new opportunites!
        </p>
      </section>

      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>

      <PostListing posts={posts} showTags={false} />
    </>
  )
}

export default IndexPage
