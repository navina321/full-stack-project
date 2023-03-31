import React from 'react'
import Footer from '../../components/Footer/Footer'
import ParkSummaryCard from '../../components/ParkSummaryCard/ParkSummaryCard'
import AttractionContainer from '../../containers/AttractionContainer/AttractionContainer'
import Header from '../../containers/Header/Header'

const ParksPage = ({title, description, image, alt}) => {
  return (
    <div className='parks-page'>
        <Header/>
        <div className='parks-main'>
            <ParkSummaryCard title={title} description={description} image={image} alt={alt}/>

            {/* <div className='parks-attr-container'>
              <AttractionContainer/>
            </div> */}
            
        </div>
        
        <Footer/>
    </div>
  )
}

export default ParksPage