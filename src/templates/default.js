import React from "react"
import HeaderFooter from "../containers/HeaderFooter"
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"

import Img from 'gatsby-image'

export default ({ data }) => {
    const page = data.wordpressPage
  return (
      <>
          <Helmet>
              <title>{page.title}</title>
          </Helmet>
        <HeaderFooter>
            {page.featured_media && <Img fluid={page.featured_media.localFile.childImageSharp.fluid} alt=""/>}
            <section className="default-template">
                <article className={'wrapper container-small'}>
                    <h2 class="headline">{page.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
                </article>
            </section>
        </HeaderFooter>
    </>
  )
}

//when querying data for a flexible content block there are a few things to remember. To access flexible content fields, instead of using their field name, you need to use [field_name]_[post_type] (if you have field named page_builder in your WordPress pages you would need to use page_builder_page). Once you do that everything will return in an array in the exact order they are in the ACF block.
export const query = graphql`
  query($id: Int) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      wordpress_id
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
