import { merge, Theme } from "theme-ui"
import { transparentize } from "@theme-ui/color"
import { tailwind } from "@theme-ui/presets"

const gray400 = `#98A0AF`
const link = `#61afef`

const colors = {
  text: `#2E3440`,
  gray: `#98A0AF`,
  link: `#61afef`,
  primary: `#27B3AC`,
  secondary: `#61afef`,
  dark: {
    text: `#abb2bf`,
    background: `#2E3440`,
    heading: `#E5E9F0`,
  },
}

const theme = merge(tailwind as Theme, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    text: colors.text,
    primary: colors.primary,
    secondary: colors.secondary,
    toggleIcon: `#27272a`,
    heading: colors.text,
    divide: colors.gray,
    modes: {
      dark: {
        text: colors.dark.text,
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.dark.background,
        heading: colors.dark.heading,
        divide: colors.gray,
        muted: colors.gray,
      },
    },
  },
  // colors: {
  //   primary: tailwind.colors.purple[7],
  //   secondary: `#5f6c80`,
  //   toggleIcon: tailwind.colors.gray[8],
  //   heading: tailwind.colors.black,
  //   divide: tailwind.colors.gray[4],
  //   modes: {
  //     dark: {
  //       text: tailwind.colors.gray[4],
  //       primary: tailwind.colors.purple[5],
  //       secondary: `#7f8ea3`,
  //       toggleIcon: tailwind.colors.gray[4],
  //       background: `#1A202C`,
  //       heading: tailwind.colors.white,
  //       divide: tailwind.colors.gray[8],
  //       muted: tailwind.colors.gray[8],
  //     },
  //   },
  // },
})

export default theme
