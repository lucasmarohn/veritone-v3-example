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

  const renderSection = (section, object) => {
    switch (section) {
      case "WordPressAcf_basic_text":
        return <BasicText data={object} />

      case "WordPressAcf_columns":
        return <Columns data={object} />

      case "WordPressAcf_video":
        return <Video data={object} />

      case "WordPressAcf_full_width_image":
        return <FullWidthImage data={object} />
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
      <main>
        <FeaturedMedia
          featured={acf.background_image}
          image={acf.featured_image.source_url}
          mp4={acf.video_mp4 ? acf.video_mp4.source_url : false}
          webm={acf.video_webm ? acf.video_webm.source_url : false}
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
      </main>
      </HeaderFooter>
    </>
  )
}

//when querying data for a flexible content block there are a few things to remember. To access flexible content fields, instead of using their field name, you need to use [field_name]_[post_type] (if you have field named page_builder in your WordPress pages you would need to use page_builder_page). Once you do that everything will return in an array in the exact order they are in the ACF block.
export const query = graphql`
  query($id: Int) {
    wordpressWpJetpackPortfolio(wordpress_id: { eq: $id }) {
      title
      wordpress_id
      excerpt
      featured_media {
        source_url
      }
      acf {
        background_image {
          source_url
        }
        featured_image {
          source_url
        }
        video_mp4 {
          source_url
        }
        video_webm {
          source_url
        }
        content_sections_jetpack_portfolio {
          ... on WordPressAcf_basic_text {
            __typename
            id
            basic_text
          }
          ... on WordPressAcf_columns {
            __typename
            id
            single_column {
              acf_fc_layout
              col_aspect_ratio
              col_video_cover {
                source_url
              }
              col_video_mp4 {
                source_url
              }
              col_image_content {
                source_url
              }
              col_wysiwyg_content
            }
          }
          ... on WordPressAcf_full_width_image {
            __typename
            id
            full_width_image {
              source_url
              caption {
                alt_text
              }
            }
          }
        }
      }
    }
  }
`
