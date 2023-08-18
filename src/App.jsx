import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="details" element={<Details />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="mens-clothing" element={<MensClothing />} />
          <Route path="womens-clothing" element={<WomensClothing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
