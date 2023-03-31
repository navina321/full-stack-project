import React from 'react'
import ParadeShowCard from '../../components/ParadeShowCard/ParadeShowCard'
import Header from '../../containers/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ParadesShows.scss'

const ParadesShows = () => {
  return (
    <div className='parades-shows-page'>
        <Header/>
            <div className='parades-shows-main'>
                <ParadeShowCard/>
            </div>
        <Footer/>
    </div>
  )
}

export default ParadesShows