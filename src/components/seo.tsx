import React from "react"
import { Helmet, HelmetProps } from "react-helmet"
import { useSiteMetadata } from "../hooks"

type SEOProps = {
  helmentProps?: HelmetProps
  description?: string
  lang?: string
  title?: string
}

const SEO: React.FC<SEOProps> = ({
  helmentProps = {},
  description = ``,
  lang = `en`,
  title = `Home`,
}) => {
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

  const meta: HelmetProps["meta"] = [
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
  ]

  if (helmentProps?.meta?.length) {
    meta.concat(helmentProps.meta)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={meta}
    />
  )
}

export default SEO
