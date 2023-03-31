import React from "react";
import AttractionPageCard from "../../components/AttractionPageCard/AttractionPageCard";
import AttractionContainer from "../../containers/AttractionContainer/AttractionContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../containers/Header/Header";
import "./AttractionPage.scss";

const AttractionPage = () => {
  return (
    <div className="attraction-page">
      <Header />

      <section className="attraction-page-main">
        <div>
          <h1 className="attraction-page-title">Attractions at Walt Disney World</h1>
          <p className="attraction-page-desc">At Walt Disney World there's attractions suitable for everyone. From rides and rollercoasters to meeting your favourite characters, there's even a variety of parades and shows to choose from if you want something where you can just sit and watch.</p>
        </div>
        
        <div className="attraction-page-container">
          <AttractionContainer />
        </div>
        
      </section>
      <Footer />
    </div>
  );
};

export default AttractionPage;
