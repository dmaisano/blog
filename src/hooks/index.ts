import { graphql, useStaticQuery } from "gatsby"
import { SiteMetadata } from "../config/gatsby-config"

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery<{
    site: {
      siteMetadata: SiteMetadata
    }
  }>(graphql`
    query UseSiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          externalLinks {
            name
            url
          }
          navigation
        }
      }
    }
  `)

  return site.siteMetadata
}
