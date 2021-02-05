import { Text, Link as TLink } from "@theme-ui/components"
import { Link } from "gatsby"
import { preToCodeBlock } from "mdx-utils"
import React from "react"
import Code from "../components/code"
import Title from "../components/title"

const NewLink = (props) => {
  console.log(props)

  return <div></div>
}

const components = {
  a: ({ children, ...props }) => <TLink {...props}>{children}</TLink>,
  Link: ({ children, to, ...props }) => (
    <Link to={to} {...props}>
      {children}
    </Link>
  ),
  Text: ({ children, ...props }) => <Text {...props}>{children}</Text>,
  Title: ({ children, text, ...props }) => (
    <Title text={text} {...props}>
      {children}
    </Title>
  ),
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

export default components
