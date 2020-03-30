import React from 'react'
import Img from 'gatsby-image'

export default ({ data }) => {
  console.log(data.full_width_image.localFile.childImageSharp)
  return (
    <div className='post__section full-width-image'>
      <Img fluid={data.full_width_image.localFile.childImageSharp.fluid.srcSet} alt='' />
      {data.full_width_image.caption ?
         <div class='image__caption'>
           {data.full_width_image.caption.alt_text}
         </div> : false}
    </div>
  )
}
