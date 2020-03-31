import React from 'react'

export default ({ data }) => {
  console.log(data.full_width_image.localFile.childImageSharp)
  return (
    <div className='post__section full-width-image'>
      <img srcset={data.full_width_image.localFile.childImageSharp.fluid.srcSet} alt='' />
      {data.full_width_image.caption ?
         <div class='image__caption'>
           {data.full_width_image.caption.alt_text}
         </div> : false}
    </div>
  )
}
