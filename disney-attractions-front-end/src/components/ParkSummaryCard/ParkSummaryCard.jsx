import React from "react";
import "./ParkSummaryCard.scss";

const ParkSummaryCard = ({title, description, image, alt}) => {
  return (
    <div className="park-summary-card">
      <h2 className="park-summary-title">{title}</h2>
      <div className="summary-card">
        <p className="summary-card__description">{description}
        </p>
        <div>
          <img src={image} alt={alt} className="summary-card__image" />
        </div>
      </div>
    </div>
  );
};

export default ParkSummaryCard;
