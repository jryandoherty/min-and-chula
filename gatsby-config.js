module.exports = {
  siteMetadata: {
    title: `Min and the Dancing Cactus`,
    description: `The adventures of Min and Chula.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },


  developMiddleware: (app) => {
      app.use((req, res, next) => {
        res.set('X-Frame-Options', 'ALLOW-FROM https://jryandoherty.com');
        next();
      });
    },


  plugins: [

    {
     resolve: `gatsby-plugin-google-gtag`,
     options: {
       // You can add multiple tracking ids and a pageview event will be fired for all of them.
       trackingIds: [
         "G-XW403YE79Z", // Google Analytics / GA
       ],

       // This object is used for configuration specific to this plugin
       pluginConfig: {
         // Puts tracking script in the head instead of the body
         head: true,
         // Setting this parameter is also optional
         respectDNT: true,
         // Avoids sending pageview hits from custom paths
         exclude: ["/preview/**", "/do-not-track/me/too/"],
         // Defaults to https://www.googletagmanager.com
         origin: "YOUR_SELF_HOSTED_ORIGIN",
         // Delays processing pageview events on route update (in milliseconds)
         delayOnRouteUpdate: 0,
       },
     },
   },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2d9b63`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cactus-green.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
}
