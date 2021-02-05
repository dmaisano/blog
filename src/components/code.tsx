import Highlight, { defaultProps, Language } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import React from "react"
import Copy from "./copy"

type LanguageType = Language & "noLineNumbers"

type CodeProps = {
  codeString: string
  className: string
  language?: LanguageType
  showCopyButton?: boolean
  metastring?: string
  [key: string]: any
}

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)![1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)))
  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

function getParams(
  className = ``
): [
  LanguageType,
  {
    title?: string
    [key: string]: any
  }
] {
  let [lang = ``, params = ``] = className.split(`:`)

  return [
    lang.split(`language-`).pop()?.split(`{`).shift() as LanguageType,
    params.split(`&`).reduce((map, param) => {
      const [key, value] = param.split(`=`)
      map[key] = value
      return map
    }, {}),
  ]
}

const Code: React.FC<CodeProps> = ({
  codeString,
  className: blockClassName,
  showCopyButton = true,
  metastring = ``,
  ...props
}) => {
  const [language, { title }] = getParams(blockClassName)
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  console.log({
    codeString,
    blockClassName,
    language,
    title,
    metastring,
  })

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {title && (
            <div className="code-title">
              <div>{title}</div>
            </div>
          )}
          <div className="gatsby-highlight" data-language={language}>
            <pre className={className} style={style}>
              {showCopyButton && <Copy content={codeString} fileName={title} />}
              <code className={`language-${language}`}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i })

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`
                  }

                  return (
                    <div {...lineProps}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  )
                })}
              </code>
            </pre>
          </div>
        </>
      )}
    </Highlight>
  )
}

export default Code
