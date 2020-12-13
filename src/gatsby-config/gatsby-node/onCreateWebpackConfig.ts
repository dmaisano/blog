import { CreateWebpackConfigArgs } from "gatsby"

// replacing react-dom with @hot-loader/react-dom during development
export const onCreateWebpackConfig = ({
  getConfig,
  stage,
}: CreateWebpackConfigArgs) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}
