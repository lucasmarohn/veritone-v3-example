const path = require('path')
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const portfolio = await graphql(`
    query {
        allWordpressWpJetpackPortfolio {
          edges {
            node {
              wordpress_id
              slug
            }
          }
        }
      }
    `)

    const portfolioTemplate = path.resolve('./src/templates/case-study.js')
    portfolio.data.allWordpressWpJetpackPortfolio.edges.forEach(edge => {
        createPage({
            // url of page
            path: `case-study/${edge.node.slug}`,
            // specificy template
            component: slash(portfolioTemplate),
            // expose id to template's graphQL query
            context: {
              id: edge.node.wordpress_id
            }
        })
    })

  const defaultPages = await graphql(`
    query {
      allWordpressPage {
        edges {
          node {
            wordpress_id
            title
            slug
            template
          }
        }
      }
    }
    `)

    const pageTemplate = path.resolve('./src/templates/default.js')
    defaultPages.data.allWordpressPage.edges.forEach(edge => {
        createPage({
            // url of page
            path: `${edge.node.slug}`,
            // specificy template
            component: slash(pageTemplate),
            // expose id to template's graphQL query
            context: {
              id: edge.node.wordpress_id
            }
        })
    })

}
