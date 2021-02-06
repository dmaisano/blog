/** @jsx jsx */
import React from "react"
import { jsx, SxStyleProp } from "theme-ui"

interface ProjectsProps {
  limit?: number
  sx?: SxStyleProp
  [key: string]: any
}

const Projects: React.FC<ProjectsProps> = ({ limit, sx, ...props }) => {
  let projects = [
    {
      title: `Reddit Clone`,
      href: `https://github.com/dmaisano/reddit-clone-tutorial`,
    },
  ]

  if (limit && limit >= 0 && limit <= projects.length) {
    projects = projects.slice(0, limit)
  }

  return (
    <ul {...props} sx={sx}>
      {projects.map(({ href, title }) => (
        <li key={`projects-${title.toLowerCase()}`}>
          <a
            href={href}
            sx={{
              variant: `links.secondary`,
              color: `text`,
            }}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Projects
