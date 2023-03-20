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

        className="sunset"
          style={{

            background:`#fe7001`,
            padding:`30px`,
            color:`#fff`,
            textAlign:`center`,
          }}

        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> ||
          Site design: <a href="https://www.jryandoherty.com">J. Ryan Doherty Design</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
