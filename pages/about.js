import React from 'react'
import AboutComp from '../components/components/about/about'
import Footer from '../components/components/Footers/Footer';
import NavbarMain from "../components/components/Navbar";
const about = () => {
  return (
    <div>
      <NavbarMain />
      <AboutComp />
      <Footer />
    </div>
  )
}

export default about
