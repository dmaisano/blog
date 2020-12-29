import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks"

function SEO({ description = ``, lang = `en`, meta = [], title = `Home` }) {
  const site = useSiteMetadata()

  const metaDescription = description || site.description
  const defaultTitle = site.title

  let titleTemplate: string = ""

  if (title && defaultTitle) {
    if (title === "Home") {
      titleTemplate = defaultTitle
    } else {
      titleTemplate = `${title} | ${defaultTitle}`
    }
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
