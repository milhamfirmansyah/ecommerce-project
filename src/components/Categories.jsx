import React from 'react';
import '../styles/categories.css';
import { useNavigate } from 'react-router-dom';
import SubTitle from './SubTitle';

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="category-wrapper">
      <div className="category-container">
        <SubTitle title={'Categories'}/>
        <h1>Browse by Category</h1>

        <div className="categories-wrapper">
          <div className="categories-container" onClick={() => navigate('/electronics')}>
            <div>
              <i class="bi bi-laptop"></i>
            </div>
            <div>
              <p>Electronics</p>
            </div>
          </div>
          <div className="categories-container" onClick={() => navigate('/jewelry')}>
            <div>
              <i class="bi bi-watch"></i>
            </div>
            <div>
              <p>Jewelry</p>
            </div>
          </div>
          <div className="categories-container" onClick={() => navigate('/mens-clothing')}>
            <div>
              <i class="bi bi-eyeglasses"></i>
            </div>
            <div>
              <p>Men's Clothing</p>
            </div>
          </div>
          <div className="categories-container" onClick={() => navigate('/womens-clothing')}>
            <div>
              <i class="bi bi-bag"></i>
            </div>
            <div>
              <p>Women's Clothing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
