import React from 'react'
import Img from 'gatsby-image'

export default ({ featured, backup, webm, mp4 }) => {
  console.log('featured image', featured, backup)
  return (
    <div className='featured-image-wrapper'>
      <div className='featured-image'>
        {webm || mp4 ? (
           <div className='video' style={{ '--aspect-ratio': '56.25%' }} poster={featured.src}>
             <video
               height='56.25%'
               width='100%'
               loop='true'
               autoplay='true'
               muted='true'>
               {mp4 && <source type='video/mp4' src={mp4} />}
               {webm && <source type='video/webm' src={webm} />}
             </video>
           </div>
           ) : (
           <Img
             id='js-scroll-featured-image'
             style={{ width: '100%', paddingBottom: '56.25%', height: '0'}}
             fluid={!featured ? backup : featured}
             alt='' />
           )}
      </div>
    </div>
  )
}
