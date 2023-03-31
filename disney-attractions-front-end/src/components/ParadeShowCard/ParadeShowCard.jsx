import React from 'react'
import './ParadeShowCard.scss'
import ParadeImage from '../../assets/images/parade.jpg'

const ParadeShowCard = () => {
  return (
    <div className='parade-show-card-container'>
        <h2 className='parade-show-title'>Parades & Shows at Disney</h2>
      <section className='parade-show-card'>
        <div className='parade-show-description'>
          <p className='parade-show-content'>Disney World is renowned for its spectacular parades and shows that bring the magic of Disney to life. From classic Disney characters to beloved Pixar heroes, these performances are a must-see for visitors of all ages.</p>
          <p className='parade-show-content'>The parades at Disney World are elaborate productions that feature colorful floats, high-energy music, and Disney characters in full costume. Disney World's shows are equally impressive, with high-tech stage productions that transport audiences into magical worlds. The nightly fireworks show at Magic Kingdom, Happily Ever After, is a stunning display of pyrotechnics set to classic Disney music.</p>
          <p className='parade-show-content'>Disney World's shows and parades are a highlight of any visit, so be sure to check the park schedule to plan your day accordingly. Whether you're a fan of classic Disney characters or modern Pixar heroes, you'll find something to love in these unforgettable performances.</p>
        </div>
        <div className='parade-show-image-container'>
          <img src={ParadeImage} alt='parades' className='parade-show-image'/>
        </div>
      </section>
    </div>
  )
}

export default ParadeShowCard