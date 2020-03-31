import React from "react"
import { graphql } from "gatsby"

export default ( props ) => {
  return (...)
}
export const query = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
      siteDescription
    }
  }
`