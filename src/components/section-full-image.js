import React from 'react'

export default ({ data }) => {
  console.log(data.full_width_image.source_url)
  return (
    <div className='post__section full-width-image'>
      <a href={data.full_width_image.source_url}><img src={data.full_width_image.source_url} alt='' /></a>
      {data.full_width_image.caption ?
         <div class='image__caption'>
           {data.full_width_image.caption.alt_text}
         </div> : false}
    </div>
  )
}
