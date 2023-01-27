import './video.css'
import React from 'react'

const Video = () => {
  return (
    <iframe
      id="video"
      src="https://www.youtube.com/embed/R9Plq-D1gEk"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

export default Video
