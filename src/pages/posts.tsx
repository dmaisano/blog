/** @jsx jsx */
import { Flex, Heading } from "@theme-ui/components"
import { Link } from "gatsby"
import React from "react"
import { jsx } from "theme-ui"
import PostListing from "../components/post-listings"
import SEO from "../components/seo"
import { useSiteMetadata } from "../hooks"
import { usePostsQuery } from "../hooks/use-posts-query"
import { replaceSlashes } from "../utils"

const Posts: React.FC = () => {
  const { basePath, tagsPath } = useSiteMetadata()
  const posts = usePostsQuery()

  return (
    <>
      <SEO title="Posts" />

      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          Posts
        </Heading>
        <Link
          sx={{ variant: `links.accent`, marginY: 2 }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Link>
      </Flex>

      <PostListing sx={{ mt: [4, 5] }} posts={posts} basePath={basePath} />
    </>
  )
}

export default Posts
