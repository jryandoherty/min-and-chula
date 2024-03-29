module.exports = {
  siteMetadata: {
    title: `Min and the Dancing Cactus`,
    description: `The adventures of Min and Chula, a new children's book by Nahyon Lee and Marshall Iliff`,
    author: `@gatsbyjs`,
    siteUrl: `https://minandchula.com/`,
  },


  developMiddleware: (app) => {
      app.use((req, res, next) => {
        res.set('X-Frame-Options', 'ALLOW');
        next();
      });
    },


  plugins: [

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
