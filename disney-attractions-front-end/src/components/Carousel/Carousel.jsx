import React from 'react'
import leftArrow from '../../assets/images/carousel-arrows/left-arrow.jpg'
import rightArrow from '../../assets/images/carousel-arrows/right-arrow.jpg'
import { useState } from 'react'


const Carousel = ({imagesArr}) => {

    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        if(counter === imagesArr.length -1){
            setCounter(0)
        }else{
            setCounter(counter+1)
        }
    }

    const handleDecrement = () => {
        if(counter === 0){
            setCounter(imagesArr.length -1)
        }else{
            setCounter(counter-1)
        }
    }


  return (
    <div className='carousel'>
        <img
        src={leftArrow}
        alt="left arrow"
        onClick={handleDecrement}
        className="carousel__arrow carousel__arrow--left"
      />
      <img src={imagesArr[counter]} alt="" className="carousel__image" />
      <img
        src={rightArrow}
        alt="right arrow"
        onClick={handleIncrement}
        className="carousel__arrow carousel__arrow--right"
      />
    </div>
  )
}

export default Carousel