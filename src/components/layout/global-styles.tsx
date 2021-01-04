import { InterpolationWithTheme } from "@emotion/core"
import { Theme } from "theme-ui"
import theme from "../../gatsby-plugin-theme-ui"

const { colors } = theme

const GlobalStyles: InterpolationWithTheme<Theme> = {
  "*": {
    boxSizing: `inherit`,
  },
  root: {
    color: colors?.text,
    backgroundColor: colors?.background,
    margin: 0,
    padding: 0,
    boxSizing: `border-box`,
    textRendering: `optimizeLegibility`,
    WebkitFontSmoothing: `antialiased`,
    MozOsxFontSmoothing: `grayscale`,
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
    backgroundColor: colors?.text,
    color: colors?.background,
  },
  a: {
    textDecoration: `none`,
    transition: `all 0.3s ease-in-out`,
    color: colors?.text,
  },
  p: {
    fontSize: [1, 1, 2],
    letterSpacing: `-0.003em`,
    lineHeight: `body`,
    "--baseline-multiplier": 0.179,
    "--x-height-multiplier": 0.35,
    wordBreak: `break-word`,
  },
  ul: {
    li: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
  },
  ol: {
    li: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
  },
  h1: {
    color: colors?.heading,
    fontSize: [5, 6, 6, 7],
    mt: 4,
  },
  h2: {
    color: colors?.heading,
    fontSize: [4, 5, 5, 6],
    mt: 4,
  },
  h3: {
    color: colors?.heading,
    fontSize: [3, 4, 4, 5],
    mt: 4,
  },
  h4: {
    color: colors?.heading,
    fontSize: [2, 3, 3, 4],
    mt: 3,
  },
  h5: {
    color: colors?.heading,
    fontSize: [1, 2, 2, 3],
    mt: 3,
  },
  h6: {
    color: colors?.heading,
    fontSize: 1,
    mb: 2,
  },
  blockquote: {
    borderLeftColor: colors?.primary,
    borderLeftStyle: `solid`,
    borderLeftWidth: `6px`,
    mx: 0,
    pl: 4,
    p: {
      fontStyle: `italic`,
    },
  },
  table: {
    width: `100%`,
    my: 4,
    borderCollapse: `separate`,
    borderSpacing: 0,
    th: {
      textAlign: `left`,
      py: `4px`,
      pr: `4px`,
      pl: 0,
      borderColor: colors?.muted,
      borderBottomStyle: `solid`,
    },
    td: {
      textAlign: `left`,
      py: `4px`,
      pr: `4px`,
      pl: 0,
      borderColor: colors?.muted,
      borderBottomStyle: `solid`,
    },
  },
  th: {
    verticalAlign: `bottom`,
    borderBottomWidth: `2px`,
    color: colors?.heading,
  },
  td: {
    verticalAlign: `top`,
    borderBottomWidth: `1px`,
  },
  hr: {
    mx: 0,
  },
}

export default GlobalStyles
