import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"
import React from "react"
import { useColorMode } from "theme-ui"
import { useSiteMetadata } from "../hooks"
import ColorModeToggle from "./colormode-toggle"

export const Header: React.FC = ({}) => {
  const { title, navigation: nav } = useSiteMetadata()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`

  const toggleColorMode = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Link
          to={`/`}
          aria-label={`${title} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none` }}
        >
          <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
            {title}
          </div>
        </Link>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        {/* <Navigation nav={nav} />
        <HeaderExternalLinks /> */}
      </div>
    </header>
  )
}
