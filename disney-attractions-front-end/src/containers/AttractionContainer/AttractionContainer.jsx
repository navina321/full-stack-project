import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './AttractionContainer.scss'
import MainPageAttrCards from '../../components/MainPageAttrCards/MainPageAttrCards'


const AttractionContainer = () => {
    
    const [attractions, setAttractions] = useState([])
    const [parks, setParks] = useState([])
    const [selectedPark, setSelectedPark] = useState("")

    const getAttractions = async parkName => {

        let url = "http://localhost:8080/attractions"

        if(parkName){
            url += `?park=${parkName}`
        }

        const response = await fetch(url)
        const attrData = await response.json()
        console.log(attrData)
        setAttractions(attrData)
    }

    const getParks = async () => {
        const response = await fetch("http://localhost:8080/attractions/parks")
        const attrData = await response.json()
        setParks(attrData)
    }

    useEffect(() => {
        getParks()
        getAttractions(selectedPark)
    },[selectedPark])

    const attractionsJSX = attractions.map((attraction) => {
        return(
           
            <div className='attr-cards'>

                    <div className='attr-card'>
                    <MainPageAttrCards image={attraction.imageUrl} description = {attraction.description} alt={attraction.attractionName} title = {attraction.attractionName} park = {attraction.park} id = {attraction.id}/>
                </div>
                <div className='attr-divider'></div>
        
            </div>

            
            
        )
    })
    console.log(attractions)
    return (
    <div className='attr-cards-container'>
        {attractionsJSX}
       {/* <MainPageAttrCards image={''} description = {''} alt={''} title = {''} park = {''} /> */}

    </div>
  )
}

export default AttractionContainer