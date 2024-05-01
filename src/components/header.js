import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header css={css`
    background-color: #333;
    padding: 1rem;
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
      <Navigation />
    </div>
  </header>
)

export default Header
