import React from 'react'
import './AttractionGallery.scss'
import Carousel from '../../components/Carousel/Carousel'

const AttractionGallery = ({attrImageArr}) => {

    const imagesArr = attrImageArr.filter((attr) => attr.imagUrl).map((attr) => attr.imagUrl)

  return (
    <div>
        <Carousel/>
    </div>
  )
}

export default AttractionGallery