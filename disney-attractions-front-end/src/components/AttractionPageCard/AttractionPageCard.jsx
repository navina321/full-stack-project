import React from 'react'
import "./AttractionPageCard.scss";


const AttractionPageCard = ({imageURL, attractionName, park, location, rideType, theme, height, access, description}) => {
  
  return (
    <div className='attraction-page-card'>
      <section className='attraction-card-top'>
        <div className='attraction-card-top__image-container'>
          <img src={imageURL} alt = 'image' className='attraction-card-top__image'/>
        </div>
        <div className='attraction-card-top__info'>
        <h1 className="attraction-card-top__name attr-info">{attractionName}</h1>
          <div className="attraction-card-top__parks attr-info">
            <h2 className="attraction-card-top__parks--park attr-info">{park}</h2>
            <h3 className="attraction-card-top__parks--location attr-info"> - {location}</h3>
          </div>
          <h3 className="attraction-card-top__ride attr-info">Ride Type: {rideType}</h3>
          <h3 className="attraction-card-top__theme attr-info">Theme: {theme}</h3>
          <h3 className="attraction-card-top__height attr-info">Height Limit: {height}</h3>
          <h3 className="attraction-card-top__access attr-info">Accessibility: {access}</h3>
        </div>
      </section>
      <p className='attraction-card-bottom'>{description}</p>
    </div>
  )
}

export default AttractionPageCard