import React from "react";
import StockImage from "../../assets/images/stock-image.jpg";
import "./AttractionPageCard.scss";

const AttractionPageCard = () => {
  return (
    <div className="attraction-page-card">
      <section>
        <section className="attraction-card-left">
          <div className="attraction-card-left__image-container">
            <img
              src={
                "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/wdpro-assets/gallery/attractions/epcot/mission-space-advanced-training-lab/mission-space-advanced-training-lab-gallery00.jpg?1660918020687"
              }
              alt="stock-image"
              className="attraction-card-left__image"
            />
          </div>
        </section>
        <div className="attraction-divider"></div>
        <section className="attraction-card-right">
          <h1 className="attraction-card-right__name">Advanced Training Lab</h1>
          <div className="attraction-card-right__parks">
            <h2 className="attraction-card-right__parks--park">EPCOT</h2>
            <h3 className="attraction-card-right__parks--location">
              {" "}
              - World Discovery
            </h3>
          </div>
          <h3 className="attraction-card-right__ride">Ride Type: </h3>
          <h3 className="attraction-card-right__theme">Theme: </h3>
          <h3 className="attraction-card-right__height">Height Limit:</h3>
          <h3 className="attraction-card-right__access">Accessibility:</h3>
        </section>
      </section>
      <p className="attraction-card-left__description">
        Calling All Space CadetsGet ready for your next space mission by
        virtually “flying” over the surface of Mars in a jetpack. Race against
        other players to send a rocket into space. Make and send video postcards
        from the very edge of space.The smallest space explorers will be
        inspired to reach for the stars as they crawl through wormholes in a fun
        interactive playground, while older cadets play digital games that prep
        them for future missions.
      </p>
    </div>
  );
};

export default AttractionPageCard;
