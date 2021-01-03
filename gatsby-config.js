const { generateConfig } = require("gatsby-plugin-ts-config")
const { join } = require("path")

module.exports = generateConfig({
  configDir: join(__dirname, "./src/config/"),
})
