/** @jsx jsx */
import React from "react"
import { Box, Container, jsx, Theme } from "theme-ui"
import SEO from "./seo"
import { Global } from "@emotion/core"
import { Header } from "./header"

type props = {
  classname?: string
}

const Layout: React.FC<props> = ({ children, classname }) => {
  return (
    <>
      <Global
        styles={(theme: Theme) => ({
          "*": {
            boxSizing: `inherit`,
          },
          html: {
            WebkitTextSizeAdjust: `100%`,
          },
          img: {
            borderStyle: `none`,
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            backgroundColor: theme.colors?.text,
            color: theme.colors?.primary,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`,
          },
        })}
      />
      <SEO />
      <Container>
        <Header />
        <Box className={classname}>{children}</Box>
      </Container>
    </>
  )
}
export default Layout
