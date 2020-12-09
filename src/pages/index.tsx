import { PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps> = (props) => (
  <Layout>
    <SEO title="Home" />

    <h1>Index Page</h1>

    <p>Index Props</p>

    <p>{JSON.stringify(props)}</p>
  </Layout>
)

export default IndexPage
