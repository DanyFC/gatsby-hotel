import * as React from "react"
import Layout from "../components/layout"
import PageDescription from "../components/pageDescription"
import Seo from "../components/seo"

const About = () => {

  return (
    <Layout>
      <PageDescription page="about" />
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default About
