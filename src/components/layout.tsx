/** @jsx jsx */
import { Global } from "@emotion/core"
import React from "react"
import { Container, jsx, Theme } from "theme-ui"
import { CodeStyles } from "../styles"
import Footer from "./footer"
import { Header } from "./header"
import SEO from "./seo"

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
            color: theme.colors?.background,
          },
          a: {
            color: theme.colors?.primary,
            fontsize: "2rem",
            transition: `all 0.3s ease-in-out`,
            textDecoration: `none`,
            ":hover": {
              textDecoration: `underline`,
            },
          },
        })}
      />
      <SEO />
      <Container id="container">
        <Header />
        <main
          id="content"
          className={classname}
          sx={{ ...(CodeStyles as any) }}
        >
          {children}
        </main>
        <Footer />
      </Container>
    </>
  )
}
export default Layout
