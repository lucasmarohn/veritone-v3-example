import React from 'react'

export default ({ text }) => {
  return (
    <div className='post__section wrapper basic-text container-small'>
      <div dangerouslySetInnerHTML={{ __html: text ? text : null }} />
    </div>
  )
}
