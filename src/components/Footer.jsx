import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import qr from '../assets/Qr Code.png';
import playstore from '../assets/GooglePlay.png';
import appstore from '../assets/AppStore.png';

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-exclusive">
          <h3 className="footer-shoped">Shoped</h3>
          <h3 className="footer-title">Subscribe</h3>
          <p>Get 10% off your first order</p>
          <input type="email" name="" id="" />
        </div>

        <div className="footer-support">
          <h3 className="footer-title">Support</h3>
          <p>Jl. Soekarno Hatta No 7, Malang</p>
          <p>shoped@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-account">
          <h3 className="footer-title">Account</h3>
          <Link to={'/about'}>My Account</Link>
          <Link to={'/sign-up'}>Login / Register</Link>
          <Link to={'/cart'}>Cart</Link>
          <Link to={'#'}>Wishlist</Link>
          <Link to={'#'}>Shop</Link>
        </div>

        <div className="footer-quicklink">
          <h3 className="footer-title">Quick Link</h3>
          <p>Privacy Policy</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="footer-download">
          <h3 className="footer-title">Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="download-container">
            <img src={qr} alt="" className='qr'/>
            <div>
              <img src={playstore} alt="" />
              <img src={appstore} alt="" />
            </div>
          </div>
          <div className="socmed">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="copyright">
        <i class="bi bi-c-circle"></i>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
