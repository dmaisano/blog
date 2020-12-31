import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery<GatsbyTypes.UseSiteMetadataQuery>(graphql`
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

  return data.site?.siteMetadata as GatsbyTypes.SiteSiteMetadata
}
