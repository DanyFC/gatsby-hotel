import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>From index</h1>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
