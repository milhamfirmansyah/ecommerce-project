import React from 'react';
import SubTitle from '../components/SubTitle';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../components/Products';

function WomensClothing() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ maxWidth: '1170px', margin: '0 auto' }}>
        <SubTitle title={"Women's Clothing"} header={"Women's Clothing Category"} />
        <Products data={data} />
      </div>
    </div>
  );
}

export default WomensClothing;
