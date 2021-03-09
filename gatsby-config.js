require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `dmaisano`,
    siteTitleAlt: `dmaisano`,
    blogPath: `/posts`,
    siteUrl: `https://dmaisano.netlify.app`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        showLineNumbers: false,
        blogPath: `/posts`,
        feedTitle: `dmaisano blog`,
        formatString: `MMM D, YYYY`,
        navigation: [
          {
            title: `Posts`,
            slug: `/posts`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Projects`,
            slug: `/projects`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/dmaisano`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dmaisano`,
        short_name: `dmaisano blog`,
        description: `personal blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3865EF`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
