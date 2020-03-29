import React from 'react'
import { Link, graphql } from 'gatsby'
import HeaderFooter from '../containers/HeaderFooter'
import { Helmet } from 'react-helmet'

import '../sass/index.sass'

export default ({ data }) => {
  const [navOpen] = false

  return (
    <HeaderFooter class={navOpen && 'mobile-nav-open'}>
      <Helmet>
        <title>
          Home | Emergence Design
        </title>
        <meta name='description' content='Web Design and Development Agency for Growing Brands'></meta>
      </Helmet>
      <section className='work__case-studies'>
        <div className='work__list wrapper'>
          {data.allWordpressWpJetpackPortfolio.edges.map(({ node }, index) => {
             const slug = `/case-study/${node.slug}`
             return (
               <article className='post__item' key={index}>
                 <Link to={slug}>
                 <img style={{ backgroundImage: `url(${node.featured_media.source_url})` }} className='thumbnail' alt='' />
                 </Link>
                 <Link to={slug} className='h3 post__title'>
                 {node.title}
                 </Link>
                 <div to={slug} className='post__excerpt'>
                   {node.excerpt}
                 </div>
               </article>
             )}
           )}
        </div>
      </section>
    </HeaderFooter>
  )
}

export const query = graphql`
query {
    allWordpressWpJetpackPortfolio {
      edges {
        node {
          wordpress_id
          slug
          title
          excerpt
          featured_media {
            source_url
          }
        }
      }
    }
  }
`
