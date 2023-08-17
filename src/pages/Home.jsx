import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import AllProducts from '../components/AllProducts'

function Home() {
  return (
    <div>
        <Navbar/>
        <Categories/>
        <AllProducts />
    </div>
  )
}

export default Home