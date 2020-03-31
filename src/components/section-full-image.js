import React from 'react'

export default ({ image, caption }) => {
  if (!image) {
    return false
  }

  console.log(image.childImageSharp)
  return (
    <div className='post__section full-width-image'>
      <img srcset={image.childImageSharp.fluid.srcSet} alt='' />
      {caption ?
         <div class='image__caption'>
           {caption}
         </div> : false}
    </div>
  )
}
