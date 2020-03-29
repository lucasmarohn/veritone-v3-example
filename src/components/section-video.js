import React from 'react'

export default ({ data }) => {
  return (
    <div className='video' style={{'--aspect-ratio': `${data.col_aspect_ratio}%`}} poster={data.col_video_cover}>
      <video
        height={`${data.col_aspect_ratio}%`}
        width='100%'
        loop='true'
        autoplay='true'
        muted='true'>
        <source type='video/mp4' src={data.col_video_mp4} />
      </video>
    </div>
  )
}
