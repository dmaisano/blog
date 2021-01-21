/** @jsx jsx */
import { Global } from "@emotion/core"
import React from "react"
import { Container, jsx } from "theme-ui"
import { ThemeProvider } from "../../theme-context"
import Footer from "../footer"
import { Header } from "../header"
import SEO from "../seo"
import GlobalStyles from "./global-styles"

type props = {
  classname?: string
}

const Layout: React.FC<props> = ({ children, classname }) => {
  return (
    <>
      <ThemeProvider>
        <Global styles={GlobalStyles} />
        <SEO />
        <Container id="container">
          <Header />
          <main id="content" className={classname}>
            {children}
          </main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}
export default Layout
