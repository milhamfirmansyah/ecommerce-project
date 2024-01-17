import React, { useEffect } from 'react';
import SubTitle from './SubTitle';
import '../styles/allproducts.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../redux/slices/productsSlice';
import Products from './Products';

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
        <SubTitle title={'All Products'} header={'Explore All Products'} />
        <Products data={data} />
      </div>
    </div>
  );
}

export default AllProducts;
