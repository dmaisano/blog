/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const Footer: React.FC = () => {
  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        textAlign: [`center`, `inherit`],
        mt: [6],
        color: `accent`,
        a: {
          variant: `links.accent`,
        },
        variant: `dividers.top`,
      }}
    >
      &copy; {new Date().getFullYear()} Domenico Maisano. All rights reserved.
    </footer>
  )
}

export default Footer
