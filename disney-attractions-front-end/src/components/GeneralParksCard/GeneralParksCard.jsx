import React from 'react'
import './GeneralParksCard.scss'

const GeneralParksCard = ({image, title, alt,description}) => {
  return (
    <div className='general-parks-card-component'>
      <div className='general-parks-card__image-container'>
        <img src ={image} alt={alt}className='general-parks-card__image'/>
      </div>
      <h2 className='general-parks-card__title'>{title}</h2>
      <p className='general-parks-card__description'>
      {description}
      </p>
    </div>
  )
}

export default GeneralParksCard