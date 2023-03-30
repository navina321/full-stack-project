import React from 'react'
import Characters from '../../components/Characters/Characters'
import Footer from '../../components/Footer/Footer'
import Header from '../../containers/Header/Header'
import './MeetCharacters.scss'

const MeetCharacters = () => {
  return (
    <div className='characters-page'>
        <Header/>
            <div className='characters-main'>
                <Characters/>
            </div>
        <Footer/>
    </div>
  )
}

export default MeetCharacters