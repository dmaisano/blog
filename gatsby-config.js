const path = require("path")

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-ts-config`,
      options: {
        configDir: path.join(__dirname, "./src/gatsby-config"),
      },
    },
  ],
}
