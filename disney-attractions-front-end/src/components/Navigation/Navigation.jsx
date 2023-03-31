import React from 'react'
import { Link } from "react-router-dom";
import './Navigation.scss'

const Navigation = () => {


  return (
    <div className = 'navigation-component'>
      <div className='navigation-dropdown'>
        <button className='dropdown-button'>
          Attractions
          <i class="fa fa-caret-down"></i>
        </button>
        <div className='dropdown-items'>
        <Link to = '/attractions' className='dropdown-item'> All Attractions</Link>
          <Link to = '/magic-kingdom' className='dropdown-item'>Magic Kingdom</Link>
          <Link to = '/animal-kingdom' className='dropdown-item'>Animal Kingdom</Link>
          <Link to = '/hollywood-studios' className='dropdown-item'v>Hollywood Studios</Link>
          <Link to = '/epcot' className='dropdown-item'>EPCOT</Link>
          <Link to = '/blizzard-beach' className='dropdown-item'>Blizzard Beach</Link>
          <Link to = '/typhoon-lagoon' className='dropdown-item'>Typhoon Lagoon</Link>
          <Link to = '/disney-springs' className='dropdown-item'>Disney Springs</Link>
        </div>
      </div>
      <Link to = '/characters'>Characters</Link>
      <Link to = '/parades-shows'>Parades & Shows</Link>
    </div>
  )
}

export default Navigation