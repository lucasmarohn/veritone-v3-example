import React from "react"
import HeaderFooter from "../containers/HeaderFooter"

import FeaturedMedia from "../components/section-featured"
import BasicText from "../components/section-basic-text"
import Columns from "../components/section-columns"
import Video from "../components/section-video"
import FullWidthImage from "../components/section-full-image"

import { graphql } from "gatsby"

import {Helmet} from 'react-helmet'

export default ({ data }) => {
  const portfolio = data.wordpressWpJetpackPortfolio
  const title = portfolio.title
  const acf = portfolio.acf
  const sections = acf.content_sections_jetpack_portfolio

  console.log(sections)

  const renderSection = (section, object) => {
    console.log(object)
    switch (section) {
      case "WordPressAcf_basic_text":
        return <BasicText text={object.basic_text} />

      case "WordPressAcf_columns":
        return <Columns columns={object}/>

      case "WordPressAcf_video":
        return <Video />

      case "WordPressAcf_full_width_image":
        return <FullWidthImage />
      default:
        break
    }
  }

  return (
    <>
      <Helmet>
        <title>{title} Case Study</title>
        <meta name="description" content={portfolio.excerpt}></meta>
      </Helmet>
      <HeaderFooter>
      <>
        <FeaturedMedia
          featured={portfolio.featured_media.localFile.childImageSharp.fluid}
          backup={portfolio.featured_media.localFile.childImageSharp.fluid}
        />
        <section>
          <div className="wrapper-container">
            <article id={`post-${portfolio.wordpress_id}`}>
              <h1 className="h2 headline post-title container-small wrapper">
                {title}
              </h1>

              {sections &&
                sections.map(({ __typename }, index) =>
                  renderSection(__typename, sections[index])
                )}
            </article>
          </div>
        </section>
      </>
      </HeaderFooter>
    </>
  )
}


//when querying data for a flexible content block there are a few things to remember. To access flexible content fields, instead of using their field name, you need to use [field_name]_[post_type] (if you have field named page_builder in your WordPress pages you would need to use page_builder_page). Once you do that everything will return in an array in the exact order they are in the ACF block.
export const query = graphql`
  query($id: Int) {
    wordpressWpJetpackPortfolio(wordpress_id: {eq: $id}) {
      title
      wordpress_id
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      acf {
        content_sections_jetpack_portfolio {
          ... on WordPressAcf_basic_text {
            id
            basic_text
          }
          ... on WordPressAcf_columns {
            id
            single_column {
              acf_fc_layout
              col_wysiwyg_content
              col_video_mp4 {
                localFile {
                  publicURL
                }
              }
              col_video_cover {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              col_image_content {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              col_aspect_ratio
            }
          }
          ... on WordPressAcf_full_width_image {
            id
            full_width_image {
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
      }
    }
  }

`
