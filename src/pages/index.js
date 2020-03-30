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
          Home
        </title>
        <meta name='description' content='Web Design and Development Agency for Growing Brands'></meta>
      </Helmet>
      <section className='work__case-studies'>
        <div className='work__list wrapper'>
          {data.allWordpressPost.edges.map(({ node }, index) => {
             const slug = `/case-study/${node.slug}`
             return (
               <article className='post__item' key={index}>
                 <Link to={slug}>
                   {console.log(node)}
                 <img style={{ backgroundImage: `url()` }} className='thumbnail' alt='' />
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
    allWordpressPost {
      edges {
        node {
          wordpress_id
          slug
          title
          excerpt
          featured_media {
            localFile {
              childImageSharp {
                fluid {
                  srcSet
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
