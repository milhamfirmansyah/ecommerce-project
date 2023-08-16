import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Details from './pages/Details'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='details' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
