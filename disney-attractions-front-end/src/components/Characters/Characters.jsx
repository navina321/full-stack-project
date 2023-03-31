import React from 'react'
import './Characters.scss'
import CharacterImage from '../../assets/images/character.jpg'
const Characters = () => {
  return (
    <div className='characters-card-container'>
      <h2 className='characters-title'>Meet your Favourite Characters!</h2>
      <section className='characters-card'>
        <div className='characters-image-container'>
          <img src={CharacterImage} alt='characters' className='characters-image'/>
        </div>
        <div className='characters-description'>
          <p className='characters-content'>Meeting characters at Disney World is an incredibly fun and memorable experience for visitors of all ages. Throughout the parks, you will have the opportunity to meet and interact with beloved Disney characters such as Mickey Mouse, Cinderella, Buzz Lightyear, and many more.</p>
          <p className='characters-content'>When you meet a character, be sure to have your camera ready for a photo opportunity, and don't be afraid to ask for autographs. Each character has their own unique personality, so be ready to engage in playful banter and interactions. You may dance with Mickey, receive a royal curtsy from a princess, or even take a photo with a Star Wars character in action.</p>
          <p className='characters-content'>Meeting characters at Disney World is a highlight of any visit, so be sure to make it part of your itinerary and enjoy the magic of your favorite Disney characters.</p>
        </div>
        
      </section>
    </div>
  )
}

export default Characters