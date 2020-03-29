import React from "react"

export default ({ featured = false, image = false, webm = "", mp4 = "" }) => {
  return (
    <div className="featured-image-wrapper">
      <div className="featured-image">
        {webm || mp4 ? (
          <div
            className="video"
            style={{ "--aspect-ratio": "56.25%" }}
            poster={featured}
          >
            <video
              height="56.25%"
              width="100%"
              loop="true"
              autoplay="true"
              muted="true"
            >
              {mp4 && <source type="video/mp4" src={mp4} />}
              {webm && <source type="video/webm" src={webm} />}
            </video>
          </div>
        ) : (
          <img id="js-scroll-featured-image" src={image} alt="" />
        )}
      </div>
    </div>
  )
}
