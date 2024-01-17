import React from 'react';
import '../styles/products.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/productsSlice';
import { Bar } from './Rating';

function Products({ data }) {
  const dispatch = useDispatch();

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
              <div onClick={() => dispatch(addToCart(item.id))} className='cart-dropdown-container'>
                <i class="bi bi-cart3"></i>
                <div className='cart-dropdown'>Add to cart</div>
              </div>
            </div>
          </div>
          <h3>{item.title}</h3>
          <p className="price">${item.price}</p>
          <div className="rating">
            <Bar rate={item.rating.rate} />
            <p>({item.rating.count})</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
