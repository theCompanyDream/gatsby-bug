/**
 * Implement Gatsby's Config APIs in this file.
 * Todo: add some type of analytics
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 const path = require('path')

 module.exports = {
   siteMetadata: {
     title: `TJ`,
     author: `Timothy Brantley II`,
     description: `some expamle gatsby page`,
     siteUrl: `https://example.com`,
  },
   plugins: [
     `gatsby-plugin-brotli`,
     `gatsby-plugin-image`,
     `gatsby-theme-material-ui`,
     `gatsby-plugin-react-helmet`,
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
     {
       resolve: `gatsby-plugin-manifest`,
       options: {
         name: `Timothy Brantley Portfolio Website`,
         short_name: `Tim's Portfoilio'`,
         description: `Portfolio containing projects that Tim has produced`,
         lang: `en`,
         start_url: `/`,
         display: `standalone`,
         background_color: `#663399`,
         theme_color: '#1e88e5',
         display: `standalone`,
         icon: `src/images/gatsby-icon.png`,
         icon_options: {
           purpose: `maskable`,
         }
       }
     },
     {
       resolve: `gatsby-plugin-sitemap`,
       options: {
         excludes: ['/blog/*', '/store/*']
       }
     },
     {
       resolve: 'gatsby-plugin-robots-txt',
       options: {
         host: `https://example.com`,
         sitemap: `/sitemap/sitemap-index.xml`,
         policy: [
           {
             userAgent: '*', 
             allow: '/', 
             disallow: ['/blog/login']
           }
         ]
       }
     },
     `gatsby-plugin-material-ui`,
     `gatsby-plugin-styled-components`,
     {
       resolve: 'gatsby-plugin-html-minifier',
       options: {
           caseSensitive: false,
           collapseBooleanAttributes: false,
           useShortDoctype: false
       }
     },
   ]
 }
 