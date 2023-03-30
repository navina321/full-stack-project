import React from 'react'
import Header from '../../containers/Header/Header'
import Footer from '../../components/Footer/Footer'
import GeneralParksCard from '../../components/GeneralParksCard/GeneralParksCard'
import AnimalKingdom from '../../assets/images/park-images/animal-kingdom.jpg'
import MagicKingdom from '../../assets/images/park-images/magic-kingdom.jpg'
import BlizzardBeach from '../../assets/images/park-images/blizzard-beach.jpg'
import EPCOT from '../../assets/images/park-images/epcot.jpg'
import HollywoodStudios from '../../assets/images/park-images/hollywood-studios.jpg'
import TyphoonLagoon from '../../assets/images/park-images/typhoon-lagoon.jpg'
import DisneySprings from '../../assets/images/park-images/disney-springs.jpg'
import './Homepage.scss'

const Homepage = () => {


  return (
    <div className='home-page'>
        <Header/>
        <section className='home-page-container'>
            <h1 className='home-page-title'>Parks at Walt Disney World </h1>
            <div className='homepage-parks-card'>
                <GeneralParksCard image = {MagicKingdom} alt ='magic-kingdom' title = 'Magic Kingdom' description="The world's most famous theme park, Magic Kingdom Park at Walt Disney World Resort in Orlando is the place where childhood dreams come true. With more than 40 unforgettable attractions, themed dining and shopping, and countless surprises, your imagination is the limit when you're at “The Most Magical Place on Earth”."/>
                
                <GeneralParksCard image = {AnimalKingdom} alt ='animal-kingdom' title = 'Animal Kingdom' description="Disney's Animal Kingdom is a park dedicated to the natural wonder and exotic wildlife of the earth. It's one of the most immersive parks, with breathtaking landscaping and elaborate details. It's also Disney's most realistic park. Here when you visit the lands of Africa and Asia you are presented with a realistic view, complete with crumbling architecture and dirt around the edges."/>
                
                <GeneralParksCard image = {HollywoodStudios} alt ='hollywood-studios' title = 'Hollywood Studios' description="Hollywood Studios  is dedicated to the world of movies, television, and entertainment, and its attractions are based on some of the most popular movies and TV shows of all time. There are several themed areas in the park, including Hollywood Boulevard, Sunset Boulevard, Echo Lake, Grand Avenue, Toy Story Land, and Star Wars: Galaxy's Edge."/>
                
                <GeneralParksCard image = {EPCOT} alt ='epcot' title = 'EPCOT' description="EPCOT  is dedicated to the celebration of human achievement, innovation, and international culture, and its attractions are divided into two main areas: Future World and World Showcase. Future World is dedicated to the celebration of human innovation and features several pavilions that explore various aspects of science, technology, and nature."/>
                
                <GeneralParksCard image = {BlizzardBeach} alt ='blizzard-beach' title = 'Blizzard Beach' description="Blizzard Beach is a water park, which is designed to resemble a ski resort that has been melted by the Florida sun, creating a unique and exciting atmosphere. The park is home to several water slides, wave pools, and lazy rivers, as well as a variety of other water attractions."/>
                
                <GeneralParksCard image = {TyphoonLagoon} alt ='typhoon-lagoon' title = 'Typhoon Lagoon' description="Typhoon Lagoon is a water park designed to resemble a tropical paradise that has been hit by a massive typhoon, creating a unique and exciting atmosphere. The park is home to several water slides, wave pools, and lazy rivers, as well as a variety of other water attractions."/>
                
                <GeneralParksCard image = {DisneySprings} alt ='disney-springs' title = 'Disney Springs' description="Disney Springs is a shopping, dining, and entertainment district located in Walt Disney World Resort. The district is spread over four distinct neighborhoods - The Landing, Marketplace, West Side, and Town Center - and features over 100 shops, restaurants, and entertainment venues."/>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Homepage