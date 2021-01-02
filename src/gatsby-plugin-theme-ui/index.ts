import { transparentize } from "@theme-ui/color"
import { tailwind } from "@theme-ui/presets"
import { ColorModesScale, merge } from "theme-ui"

const colors: ColorModesScale = {
  accent: `#5f6c80`,
  background: `#FEFEFE`,
  divide: `#cbd5e0`,
  highlight: `#7f9cf5`,
  primary: `#7f9cf5`,
  secondary: `#a5e075`,
  text: `#2E3440`,
  heading: `#424242`,
  toggleIcon: tailwind.colors.gray[8] as string,
  modes: {
    dark: {
      accent: `#7f8ea3`,
      background: `#1A202B`,
      divide: `#2d3748`,
      text: `#D8DEE9`,
      heading: `#FFFFFF`,
      toggleIcon: tailwind.colors.gray[4] as string,
    },
  },
}

const theme = merge(tailwind as any, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors,
  fonts: {
    body: `"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  // styles,
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `1024px`,
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  copyButton: {
    backgroundColor: transparentize(`primary`, 0.8),
    border: `none`,
    color: `gray.2`,
    cursor: `pointer`,
    fontSize: [`14px`, `14px`, `16px`],
    fontFamily: `body`,
    letterSpacing: `0.025rem`,
    transition: `default`,
    "&[disabled]": {
      cursor: `not-allowed`,
    },
    ":not([disabled]):hover": {
      bg: `primary`,
      color: `white`,
    },
    position: `absolute`,
    top: 0,
    right: 0,
    zIndex: 1,
    borderRadius: `0 0 0 0.25rem`,
    padding: `0.25rem 0.6rem`,
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
  },
})

export default theme
