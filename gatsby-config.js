/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Emergence`
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `emergence.design`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true
      }
    },
    `gatsby-plugin-sass`
  ]
}
