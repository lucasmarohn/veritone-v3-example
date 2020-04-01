import React from "react"
import Img from "gatsby-image"

export default ({ image, caption }) => {
  console.log("image", image)
  if (!image) {
    return false
  }
  return (
    <div className="post__section full-width-image">
      {image.localFile && image.localFile.childImageSharp.fluid && (
        <Img fluid={image.localFile.childImageSharp.fluid} alt="" />
      )}
      {caption ? <div class="image__caption">{caption}</div> : false}
    </div>
  )
}
