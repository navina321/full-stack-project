import React from 'react'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainPageAttrCards from '../../components/MainPageAttrCards/MainPageAttrCards';

const EachAttractionPage = () => {

    

  return (
    <div className='each-attraction-page'>
        <Header/>
        <div className='each-attraction-page-main'>
            <MainPageAttrCards/>
        </div>
        <Footer/>
    </div>
  )
}

export default EachAttractionPage
