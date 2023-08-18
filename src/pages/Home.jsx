import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import AllProducts from '../components/AllProducts'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Categories/>
        <AllProducts />
        <WhyUs/>
        <Footer />
    </div>
  )
}

export default Home