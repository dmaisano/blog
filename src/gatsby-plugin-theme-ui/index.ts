import { tailwind } from "@theme-ui/presets"
import { ColorModesScale, merge, Theme } from "theme-ui"

const colors: ColorModesScale = {
  accent: `#E2E8F0`,
  background: `#ECEFF4`,
  highlight: `#61afef`,
  muted: undefined,
  primary: `#A3BE8C`,
  secondary: `#61afef`,
  text: `#2E3440`,
  heading: `#1A202B`,
  toggleIcon: tailwind.colors.gray[8] as string,
  modes: {
    dark: {
      accent: `#394555`,
      background: `#1A202B`,
      highlight: `#A3BE8C`,
      primary: `#A3BE8C`,
      secondary: `#61afef`,
      text: `#D8DEE9`,
      heading: `#FFFFFF`,
      toggleIcon: tailwind.colors.gray[4] as string,
    },
  },
}

const theme = merge(tailwind as Theme, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors,
})

export default theme
