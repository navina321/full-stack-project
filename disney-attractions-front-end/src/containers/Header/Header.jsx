import React from 'react'
import { Link } from 'react-router-dom'
import HeaderComponent from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import './Header.scss'
const Header = () => {
  return (
    <div className='header-container'>
        <section className='header'>
            <Link to = '/home'>
              <HeaderComponent/>
            </Link>
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