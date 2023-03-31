import React from 'react'

import Header from '../../containers/Header/Header';
import Footer from '../../components/Footer/Footer';
import AttractionPageCard from '../../components/AttractionPageCard/AttractionPageCard';
import './EachAttractionPage.scss'

const EachAttractionPage = () => {
  
  return (
    <div className='each-attraction-page'>
        <Header/>
        <div className='each-attraction-page-main'>
            <AttractionPageCard/>
        </div>
        <Footer/>
    </div>
  )
}

export default EachAttractionPage
