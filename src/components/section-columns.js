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
      <a href={column.col_image_content.source_url} data-fancybox='gallery'><img src={column.col_image_content.source_url} alt='' />
        <div className='image__caption'></div>
      </a>
    )
  }

  const renderTextColumn = column => {
    return (
      <div dangerouslySetInnerHTML={{ __html: column.col_wysiwyg_content }}></div>
    )
  }

  const renderVideoColumn = column => {
    if (!column.col_video_mp4.localFile.relativePath) {
      return column.col_video_content
    } else {
      return (
        <div class='video' style={{ '--aspect-ratio': `${column.col_aspect_ratio}%` }}>
          <video height={`${column.col_aspect_ratio}%`} width='100%' poster={column.col_video_cover}>
            <source type='video/mp4' src={column && column.col_video_mp4.localFile.relativePath} />
          </video>
        </div>
      )
    }
  }

  return (
    <div className='post__section wrapper columns'>
      {columns && columns.map((col, index) => (
         <div className={`col__single col-${index}`}>
           {renderSingleColumn(col)}
         </div>
       ))}
    </div>
  )
}
