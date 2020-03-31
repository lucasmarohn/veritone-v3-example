import React from 'react'

export default ({ data }) => {
  const columns = data.single_column

  const renderSingleColumn = col => {
    switch (col.acf_fc_layout) {
      case 'col_image':
        return renderImageColumn(col)
      case 'col_wysiwyg':
        return renderTextColumn(col)
      case 'video':
        return renderVideoColumn(col)
      default:
        break
    }
  }

  const renderImageColumn = column => {
    return (
      <>  
        <img srcset={column.col_image_content.localFile.childImageSharp.fluid.srcSet} alt='' />
        <div className='image__caption'></div>
      </>
    )
  }

  const renderTextColumn = column => {
    return (
      <div dangerouslySetInnerHTML={{ __html: column.col_wysiwyg_content }}></div>
    )
  }

  const renderVideoColumn = column => {
    if (!column.col_video_mp4.localFile.publicURL) {
      return column.col_video_content
    } else {
      return (
        <div class='video' style={{ '--aspect-ratio': `${column.col_aspect_ratio}%` }}>
          <video
            height={`${column.col_aspect_ratio}%`}
            width='100%'
            poster={column.col_video_cover.localFile ? column.col_video_cover.localFile.childImageSharp.fluid.src : ''}
            loop
            autoplay='true'
            muted='true'>
            <source type='video/mp4' src={column.col_video_mp4 && column.col_video_mp4.localFile.publicURL} />
          </video>
        </div>
      )
    }
  }

  return (
    <div className={`post__section wrapper columns ${columns ? `cols-${columns.length}` : ''}`}>
      {columns && columns.map((col, index) => (
         <div className={`col__single col-${index}`}>
           {renderSingleColumn(col)}
         </div>
       ))}
    </div>
  )
}
