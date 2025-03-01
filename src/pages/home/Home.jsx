import React from 'react'
import FirstSection from './sections/FirstSection'
import Noticebar from './elements/Noticebar'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'

const Home = () => {
  return (
    <div>
      <Noticebar/>
      <FirstSection/>  
      <SectionTwo/>    
      <SectionThree/>    
      
    </div>
  )
}

export default Home
