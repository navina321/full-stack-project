import React from 'react'
import HeaderComponent from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import './Header.scss'
const Header = () => {
  return (
    <div className='header-container'>
        <section className='header'>
            <a href='#'>
              <HeaderComponent/>
            </a>
            <div className='header__navigation'>
             <Navigation/>
            </div>
        </section>
        <div className='header-divider'>

        </div>
    </div>
  )
}

export default Header