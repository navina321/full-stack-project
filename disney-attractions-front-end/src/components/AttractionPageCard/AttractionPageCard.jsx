import React from 'react'
import "./AttractionPageCard.scss";


const AttractionPageCard = ({imageURL, attractionName, park, location, rideType, theme, height, access, description}) => {
  
  return (
    <div className='attraction-page-card'>
      <section className='attraction-card-top'>
        <div className='attraction-card-top__image-container'>
          <img src={'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/wdpro-assets/gallery/attractions/epcot/mission-space-advanced-training-lab/mission-space-advanced-training-lab-gallery00.jpg?1660918020687'} alt = 'image' className='attraction-card-top__image'/>
        </div>
        <div className='attraction-card-top__info'>
        <h1 className="attraction-card-top__name attr-info">{"Advanced Training Lab"}</h1>
          <div className="attraction-card-top__parks attr-info">
            <h2 className="attraction-card-top__parks--park attr-info">{"EPCOT"}</h2>
            <h3 className="attraction-card-top__parks--location attr-info"> - {"World Discovery"}</h3>
          </div>
          <h3 className="attraction-card-top__ride attr-info">Ride Type: {"Interactive"}</h3>
          <h3 className="attraction-card-top__theme attr-info">Theme: {"Indoors"}</h3>
          <h3 className="attraction-card-top__height attr-info">Height Limit: {"Any Height"}</h3>
          <h3 className="attraction-card-top__access attr-info">Accessibility: {'yes'}</h3>
        </div>
      </section>
      <p className='attraction-card-bottom'>{"Calling All Space CadetsGet ready for your next space mission by virtually “flying” over the surface of Mars in a jetpack. Race against other players to send a rocket into space. Make and send video postcards from the very edge of space.The smallest space explorers will be inspired to reach for the stars as they crawl through wormholes in a fun interactive playground, while older cadets play digital games that prep them for future missions."}</p>
    </div>
  )
}

export default AttractionPageCard