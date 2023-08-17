import React, { useEffect } from 'react';
import SubTitle from './SubTitle';
import '../styles/allproducts.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../redux/slices/productsSlice';

function AllProducts() {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData(data));
  }, []);

  console.log(data);

  return (
    <div className="all-products-wrapper">
      <div className="all-products-container">
        <SubTitle title={'All Products'} />
        <h1>Explore All Products</h1>

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
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
