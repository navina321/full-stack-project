import React from 'react'
import './Navigation.scss'

const Navigation = () => {


  return (
    // <div className = 'navigation-component'>
    //     <h2 className='navigation-item'>Parks</h2>
    //     <h2 className='navigation-item'>Characters</h2>
    //     <h2 className='navigation-item'>Parades & Shows</h2>
    // </div>
    <div className = 'navigation-component'>
      <div className='navigation-dropdown'>
        <button className='dropdown-button'>
          Attractions
          <i class="fa fa-caret-down"></i>
        </button>
        <div className='dropdown-items'>
          <a href='#'>Magic Kingdom</a>
          <a href='#'>Animal Kingdom</a>
          <a href='#'>Hollywood Studios</a>
          <a href='#'>EPCOT</a>
          <a href='#'>Blizzard Beach</a>
          <a href='#'>Typhoon Lagoon</a>
          <a href='#'>Disney Springs</a>
        </div>
      </div>
      <a href='#'>Characters</a>
      <a href='#'>Parades & Shows</a>
    </div>
  )
}

export default Navigation