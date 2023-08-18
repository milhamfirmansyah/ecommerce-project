import React from 'react';
import container from '../assets/whyus-icon-container.png';
import '../styles/whyus.css'

function WhyUs() {
  return (
    <div className="why-us-wrapper">
      <div className="why-us-container">
        <div className="why-us">
          <div className="whyus-icon-container">
            <img src={container} alt="" />
            <i class="bi bi-truck"></i>
          </div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className="why-us">
          <div className="whyus-icon-container">
            <img src={container} alt="" />
            <i class="bi bi-headset"></i>
          </div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="why-us">
          <div className="whyus-icon-container">
            <img src={container} alt="" />
            <i class="bi bi-check2-square"></i>
          </div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
