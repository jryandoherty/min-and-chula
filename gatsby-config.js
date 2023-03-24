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
    { // this must be loaded first in order to work
         resolve: `gatsby-plugin-google-gtag`, // note this instead of gatsby-plugin-react-helmet
         options: {
           trackingId: "G-XW403YE79Z",
           head: true, // note this is TRUE and not FALSE as listed in other examples above
           anonymize: true
         }
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
