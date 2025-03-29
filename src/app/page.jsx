import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Know_us from './components/Know_us'
import Excellent_Features from './components/Excellent_Features'
import Technological_Resources from './components/Technological_Resources'
import SelectUs from './components/SelectUs'
import WeServe from './components/WeServe'
import IndustryPartner from './components/IndustryPartner'
import OurInnovative from './components/OurInnovative'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import CustomerCommunity from './components/CustomerCommunity'
import ExpertTeam from './components/ExpertTeam'
import Interns from './components/Interns'

const Homepage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Home/>
      <Know_us/>
      <Excellent_Features/>
      <Technological_Resources/>
      <SelectUs/>
      <WeServe/>
      <IndustryPartner/>
      <OurInnovative/>
      <Testimonial/>
      <ExpertTeam/>
      <Interns/>
      <CustomerCommunity/>
      {/* <Footer/> */}
    </div>
  )
}

export default Homepage
