import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import PageDescription from "../components/pageDescription"

const IndexPage = () => {

  return (
    <Layout>
      <Hero />
      <PageDescription />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
