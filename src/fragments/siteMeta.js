import { graphql } from 'gatsby'

export const wordpressMetaFragment = graphql`
  fragment wordpressMeta on Query {
    wordpressSiteMetadata {
        name
        url
        description
        home
      }
  }
`
