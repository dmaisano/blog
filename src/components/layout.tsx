/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const Layout = ({ children }) => {
  return (
    <>
      <h1
        sx={{
          color: `blue`,
        }}
      >
        Layout
      </h1>
      <main>{children}</main>
    </>
  )
}
export default Layout
