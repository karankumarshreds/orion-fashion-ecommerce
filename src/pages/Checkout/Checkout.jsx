import React from 'react';
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import './Checkout.scss';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id}></CheckoutItem>
      ))}
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        NUMBER: 4242 4242 4242 4242 4242 <br /> CVC: any <br /> DATE: Any future
        date
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
