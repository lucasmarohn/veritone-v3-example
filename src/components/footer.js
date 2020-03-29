import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer className="footer wrapper" role="contentinfo">
      <p className="copyright">
        Copyright © 2020&nbsp;
        {data.site.siteMetadata.title}
      </p>
    </footer>
  )
}
