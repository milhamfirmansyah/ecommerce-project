import React from 'react';
import SubTitle from '../components/SubTitle';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import Navbar from '../components/Navbar';

function Jewelery() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products/category/jewelery');
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <Navbar/>
      <div style={{ maxWidth: '1170px', margin: '0 auto' }}>
        <SubTitle title={'Jewelery'} header={'Jewelery Category'} />
        <Products data={data}/>
      </div>
      <WhyUs/>
    </div>
  );
}

export default Jewelery;
