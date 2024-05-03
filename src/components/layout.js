/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from '@emotion/react'
import Header from "./header"

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
      <Global
        styles={css`
        html {
          box-sizing: border-box;
          font-size: 62.5%;
        }
        *, ::after, ::before {
          box-sizing: inherit;
        }
        body {
          font-family: 'PT Sans', sans-serif;
          font-size: 1.6rem;
          line-height: 1.5;
        }
        h1, h2,h3 {
          line-height: 1.5;
          margin: 0;
        }
        h1, h2 {
          font-family: 'Roboto', sans-serif;
        }
        h3 {
          font-family: 'PT Sans', sans-serif;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      `}
      />
      <Helmet>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()}.</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
