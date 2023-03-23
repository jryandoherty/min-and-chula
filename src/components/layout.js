/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

    <Helmet>
    <link rel="stylesheet" href="https://use.typekit.net/pmc5egq.css" />
    </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          background: `#EBB052`,


        }}
      >


        <main>{children}</main>

        <footer
          style={{
            background:`#fe7001`,
            padding:`30px`,
            paddingTop:`0`,
            color:`#fff`,
            textAlign:`center`,
          }}

        >
          <p>© {new Date().getFullYear()}, built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a></p>
          <p>site design: <a href="https://www.jryandoherty.com">J. Ryan Doherty Design</a></p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
