import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">
      <h2>
        {siteTitle}
      </h2>
    </Link>
  </header>
)

export default Header
