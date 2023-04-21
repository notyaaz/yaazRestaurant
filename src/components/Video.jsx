import React from 'react'
import images from '../images'

export default function Video() {
  return (
    <div className="w-[100%]">
        <video controls loop >
            <source src={images.meal} type="video/mp4"/>
        </video>
    </div>
  )
}
