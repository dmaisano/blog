/** @jsx jsx */
import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"
import React from "react"
import { jsx, Link as TLink, useColorMode } from "theme-ui"
import { useSiteMetadata } from "../hooks"
import { replaceSlashes } from "../utils"
import ColorModeToggle from "./colormode-toggle"

export const Header: React.FC = ({}) => {
  const { basePath, title, navigation: nav, externalLinks } = useSiteMetadata()
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
          to={basePath}
          aria-label={`${title} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none` }}
        >
          <div sx={{ my: 0, fontWeight: `semibold`, fontSize: [3, 4] }}>
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
          color: `accent`,
          a: { color: `accent`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        {nav && nav.length > 0 && (
          <nav
            sx={{
              "a:not(:last-of-type)": { mr: 3 },
              fontSize: [1, `18px`],
              "a.active": { color: `heading` },
            }}
          >
            {nav.map((navLink) => {
              const lowcaseLink = navLink?.toLowerCase()

              return (
                <Link
                  key={lowcaseLink}
                  activeClassName="active"
                  to={replaceSlashes(`/${basePath}/${lowcaseLink}`)}
                >
                  {navLink}
                </Link>
              )
            })}
          </nav>
        )}

        {externalLinks && externalLinks.length > 0 && (
          <div
            sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}
          >
            {externalLinks.map((link) => (
              <TLink key={link?.name} href={link?.url} target="_blank">
                {link?.name}
              </TLink>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
