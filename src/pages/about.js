import * as React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
        <div className="nav-con">
    <AniLink cover to="/" bg="#000" direction="right" className="nav-link">
        Home
    </AniLink>
    </div>
      <Seo title="About Us" />
      <h1>About Us?</h1>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Lazy people.</p>
      <p>Just kidding.</p>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
