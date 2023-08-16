import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Details from './pages/Details'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='details' element={<Details/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='sign-up' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
