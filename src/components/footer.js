import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import Navigation from "./navigation"


const Footer = ({ siteTitle }) => {
  return (
    <footer css={css`
      background-color: rgb(44, 62, 80);
      margin-top: 5rem;
    `}>
      <div css={css`
        max-width: 1200px;
        margin: 0 auto;

        @media (min-width: 768px) {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }
      `}>
        <Navigation />
        <Link to="/" css={css`
          text-decoration: none;
        `}>
          <h1 css={css`
          color: #fff;
          text-align: center;
          `}>
            {siteTitle}
          </h1>
        </Link>
      </div>
      <div css={css`
        background-color: #222;
        text-align: center;
        color: white;
        background-color: rgb(33, 44, 55);
      `}>
        {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>. All rights reserved &copy;.
      </div>
    </footer>
  )
}

export default Footer