/** @jsx jsx */
import { Box } from "@theme-ui/components"
import React from "react"
import { jsx } from "theme-ui"

type TitleProps = {
  as: "h1" | "h2"
  className?: string
  text: string
}

const Title: React.FC<TitleProps> = ({
  children,
  as = `h2`,
  className = ``,
  text,
}) => {
  return (
    <div
      sx={{
        justifyContent: `space-between`,
        alignItems: `center`,
        borderBottomStyle: `solid`,
        borderBottomWidth: `1px`,
        borderBottomColor: `divide`,
        pb: 3,
        mb: 4,
        flexFlow: `wrap`,
        boxSizing: `border-box`,
        display: `flex`,
      }}
    >
      <Box
        as={as}
        sx={{
          fontWeight: `medium`,
          fontSize: [3, 4],
          fontFamily: `heading`,
          lineHeight: `heading`,
          color: `heading`,
        }}
        className={className}
      >
        {text}
      </Box>
      <div
        sx={{
          color: `secondary`,
          a: {
            variant: `links.secondary`,
          },
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Title
