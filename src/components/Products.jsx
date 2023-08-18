import React from 'react';
import '../styles/products.css';

function Products({ data }) {
  return (
    <div className="products-wrapper">
      {data.map((item) => (
        <div className="product-container">
          <div className="product-image-container">
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="product-category">
              <p className="product-category-p">{item.category}</p>
            </div>
            <div className="cart-product-container">
              <div>
                <i class="bi bi-cart3"></i>
              </div>
            </div>
          </div>
          <h3>{item.title}</h3>
          <p className="price">${item.price}</p>
          <p className="rating">Rating</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
