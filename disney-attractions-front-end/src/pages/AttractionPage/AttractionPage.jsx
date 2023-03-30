import React from 'react'
import AttractionPageCard from '../../components/AttractionPageCard/AttractionPageCard'
import Footer from '../../components/Footer/Footer'
import Header from '../../containers/Header/Header'
import './AttractionPage.scss'


const AttractionPage = () => {
  return (
    <div className='attraction-page'>
        <Header/>
        <div className='attraction-page-main'>
                <AttractionPageCard/>
        </div>
        <Footer/>
    </div>
  )
}

export default AttractionPage