/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

import { CreateWebpackConfigArgs } from "gatsby"

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
