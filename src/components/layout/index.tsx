/** @jsx jsx */
import { Global } from "@emotion/core"
import React from "react"
import { Container, jsx } from "theme-ui"
import { Header } from "../header"
import SEO from "../seo"
import styles from "./global-styles"

type props = {
  classname?: string
}

const Layout: React.FC<props> = ({ children, classname }) => {
  return (
    <>
      <Global styles={styles as any} />
      <SEO />
      <Container id="container">
        <Header />
        <main id="content" className={classname}>
          {children}
        </main>
      </Container>
    </>
  )
}
export default Layout
