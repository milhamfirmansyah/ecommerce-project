import React, {useState, useEffect} from 'react';
import SubTitle from '../components/SubTitle';
import Products from '../components/Products';
import axios from 'axios';

function MensClothing() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ maxWidth: '1170px', margin: '0 auto' }}>
        <SubTitle title={"Men's Clothing"} header={"Men's Clothing Category"} />
        <Products data={data}/>
      </div>
    </div>
  )
}

export default MensClothing;
