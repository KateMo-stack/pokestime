import React, {Component} from 'react'
import kwiat1 from '../obrazki_kwiaty/kwiat1.jpg'

const MyImage = ({imageSrc, imageAlt,imageClassName, headertext }) =>  {
  // state = {
  //   content: '',
  // }


    return(
      <div className={`sss`}>
        <img src={imageSrc} alt={imageAlt} className={imageClassName}/>
        <h3>{headertext}</h3>
      </div>
    )
  }


export default MyImage;