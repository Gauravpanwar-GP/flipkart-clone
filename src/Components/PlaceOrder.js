import React, { useEffect } from 'react'
import Header from './Header'
import '../css/placeorder.css'

const PlaceOrder = () => {

    useEffect(()=>{
        document.title = 'Flipkart.com: Secure Payment: Login > Select Shipping Address > Review Order > Place Order';
    }, [])

  return (
    <>
    <Header />
    <div className='placeorder-main-div'>
      <div className='placeorder-child-div'>
        <div className='child-div'>
          <div className='child-div-1'>
            <span>1</span>
          </div>
          <div className='child-div-2'>
            <label>LOGIN</label>
            <label>✔</label>
          </div>
          <div className='child-div-3'>
            <label>CHANGE</label>
          </div>
        </div>
        <div className='child-div'>
          <div className='child-div-1'>
            <span>2</span>
          </div>
          <div className='child-div-2'>
            <label>DELIVERY ADDRESS</label>
          </div>
        </div>
        <div className='child-div'>
          <div className='child-div-1'>
            <span>3</span>
          </div>
          <div className='child-div-2'>
            <label>ORDER SUMMARY</label>
          </div>
        </div>
        <div className='child-div'>
          <div className='child-div-1'>
            <span>4</span>
          </div>
          <div className='child-div-2'>
            <label>PAYMENT OPTION</label>
          </div>
        </div>
      </div>
      <div className='order-price'>
        <label>PRICE DETAILS</label>
        <label>
          <span>Price</span>
          <span>0</span>
        </label>
        <label>
          <span>Delivery Charges</span>
          <span>Free</span>
        </label>
        <label>
          <span>Total Payable</span>
          <span>0</span>
        </label>
      </div>
    </div>
    </>
  )
}

export default PlaceOrder