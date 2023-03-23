import React from 'react'
import './MainPageAttrCards.scss'

const MainPageAttrCards = ({image, alt, title, description, park}) => {
  return (
    <div className='main-page-attr-cards'>
        <section className='main-attr-card'>
            <div className='main-attr-card__image-container'>
                <img src = {image} alt= {alt} className='main-attr-card__image'/>
            </div>
            <div className='main-attr-card__text-elements'>
                <h3 className='main-attr-card__title'>{title}</h3>
                <p className='main-attr-card__description'>{description}</p>
                <h4 className='main-attr-card__park'>{park}</h4>
            </div>
        </section>
        
    </div>
  )
}

export default MainPageAttrCards