import React from 'react'
import '../styles/imageDetailsContent.css'

export default function ImageDetailsContent(props) {
  return (
    <div className="image-content">
          <div className="image-container">
            <img src={props.img} alt="pic" />
          </div>
          <div className="content-container">
            <div className="content-container-div">
            <h3>{props.h3}</h3>
            <p>
             {props.p1}
            </p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            </div> 
          </div>
        </div>
  )
}
