import React from 'react'

export default ({ data }) => {
  return (
    <div className='post__section wrapper basic-text container-small'>
      <div dangerouslySetInnerHTML={{ __html: data.basic_text }} />
    </div>
  )
}
