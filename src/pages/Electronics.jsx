import React, { useEffect, useState } from 'react';
import SubTitle from '../components/SubTitle';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';

function Electronics() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products/category/electronics');
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div style={{ width: '100%' }}>
      <Navbar/>
      <div style={{ maxWidth: '1170px', margin: '0 auto' }}>
        <SubTitle title={'Electronics'} header={'Electronics Category'} />
        <Products data={data}/>
      </div>
      <WhyUs />
    </div>
  );
}

export default Electronics;
