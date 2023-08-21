import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, removeToCart } from '../redux/slices/productsSlice';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function Cart() {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(cart);

  //handle decrement cart
  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
    const item = cart.find((item) => item.id === productId);
    if (item.quantity === 1) {
      dispatch(removeToCart(productId));
    }
  };

  //total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div style={{ marginBottom: '83px' }}>
        <Navbar />
      </div>

      <div className="cart-wrapper">
        <div className="cart-container">
          <h2>Home / Cart</h2>

          <div className="cart-main-container">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {cart.map((item) => (
            <div className="cartlist-container">
              <div className="cart-product">
                <img src={item.image} alt="" />
                <p className="cart-title">{item.title}</p>
              </div>

              <div className="cart-price">
                <p>${item.price}</p>
              </div>

              <div className="cart-quantity">
                <div className="quantity-container">
                  <p>{item.quantity}</p>
                  <div>
                    <button onClick={() => dispatch(addToCart(item.id))}>
                      <i class="bi bi-chevron-up"></i>
                    </button>
                    <button onClick={() => handleDecrement(item.id)}>
                      <i class="bi bi-chevron-down"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="cart-subtotal">
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="cart-total-wrapper">
            <button className="to-shop" onClick={() => navigate('..')}>
              Return to Shop
            </button>

            <div className="cart-total-container">
              <h3>Cart Total</h3>
              <div className="subtotal">
                <p>Subtotal</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="shipping">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="total">
                <p>Total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="checkout-button-wrapper">
                <button className="checkout">Procees to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
