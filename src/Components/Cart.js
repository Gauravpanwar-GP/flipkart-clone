import React, { useEffect, useRef, useState } from "react";
// import HF from './HOC'
import Header from "./Header";
import EmptyCart from "../image/EmptyCart.png";
// import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const getData = () => {
  const ProData = localStorage.getItem("product");
  if (ProData) {
    return JSON.parse(ProData);
  } else {
    return [];
  }
};

const Cart = () => {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState(getData());

  const [count, setCount] = useState(1);

  const dec = (id) => {
    let Eid = cartItem.filter((item) => {return item.id === id});
    if(id !== Eid){
      return setCount(count === 1 ? 1 : count - 1);
    } else {
      return count;
    }
  };

  const inc = (id) => {
    let Eid = cartItem.filter((item) => {return item.id === id});
    console.log(cartItem.filter((item)=>{return item.id === id}));
    console.log(id);
    if(id !== Eid){
      return setCount(count + 1);
    } else {
      return count;
    }
  };

  const [loader, setLoader] = useState(true);
  const remove = (id) => {
    let removeItm = cartItem.filter((item, i) => {
      return i !== id;
    });
    setCartItem(removeItm);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    rem.current.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  let cartItems = JSON.parse(localStorage.getItem("product"));

  // console.log(Math.ceil(cartItem.forEach(item => {
  //   return item.price})?.price * 79.89),"jsadklf");

  // console.log(pricedata);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cartItem));
    // console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    setCartItem(cartItems);
  }, []);

  const rem = useRef();

  const [proId, setProId] = useState();

  const openpop = () =>{
    rem.current.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  const clspop = () => {
    rem.current.style.display = "none";
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <div className="rmv-bg" ref={rem}>
        <div className="remove-popup">
          <div className="rll">
            <button className="close" onClick={() => clspop()}>
              X
            </button>
            <div className="remove">
              <label>Remove Item</label>
              <label>Are you sure you want to remove this item?</label>
              <div>
                <button onClick={() => clspop()}
                  style={{ cursor: "pointer" }}
                  >CANCEL</button>
                <button
                  onClick={() => remove(proId)}
                  style={{ cursor: "pointer" }}
                >
                  YES, REMOVE IT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      {load ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : cartItem?.length !== 0 ? (
        <div className="cartt">
          <div className="Cart-pages">
            <div className="cart-pages-1">
              <div className="carts-flipkart active">
                <label>Flipkart ({cartItem.length})</label>
              </div>
              <div className="carts-grocery">
                <label>Grocery</label>
              </div>
            </div>
            <div className="cart-pages-3">
              <div className="address">
                <label>From Saved Addresses</label>
                <label>Enter Delivery Pincode</label>
              </div>
            </div>
            <div className="cart-pages-2">
              {cartItem.map((item, id) => {
                // console.log(item.id === cartItem.find((i)=>{ return i.id == item.id})?.id);
                return (
                  <>
                    <div className="cart-last">
                      <div
                        className="cart-products"
                        key={id}
                        onClick={() => {
                          navigate(`/ProductDetails?${item.title}`, {
                            state: {
                              data: item,
                            },
                          });
                        }}
                      >
                        <div className="part1">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="cart-image"
                          />
                        </div>
                        <div className="part2">
                          <label>{item.title}</label>
                          <label>{item.description?.slice(0, 50)}.....</label>
                          <label>&#8377;{Math.ceil(item.price * 79.89)}</label>
                        </div>
                      </div>
                      <div className="part3">
                        <div>
                          <button onClick={() => dec(item.id)}> - </button>
                          <h4 style={{ color: "#000" }}>{count}</h4>
                          <button onClick={() => inc(item.id)}> + </button>
                        </div>
                        <label>SAVE FOR LATER</label>
                        <label style={{ cursor: "pointer" }} onClick={()=>{
                          openpop()
                          setProId(id)
                          }} >REMOVE</label>
                      </div>
                    </div>
                    {/* <br /> */}
                  </>
                );
              })}
            </div>
            <div className="placeorder">
              <label onClick={()=>window.location.href='/placeorder'}>PLACE ORDER</label>
            </div>
          </div>
          <div className="cart-price">
            <label>PRICE DETAILS</label>
            <label>
              <span>Price ({cartItem.length} item)</span>
              <span>
                &#8377;
                {Math.ceil(
                  Object.keys(cartItem).reduce(
                    (pre, cur) => pre + +cartItem[cur].price * 79.89,
                    0
                  )
                )}
              </span>
            </label>
            <label>
              <span>Discount</span>
              <span>&#8377;0</span>
            </label>
            <label>
              <span>Delivery Charges</span>
              <span>FREE</span>
            </label>
            <label>
              <span>Total Amount</span>
              <span>
                &#8377;
                {Math.ceil(
                  Object.keys(cartItem).reduce(
                    (pre, cur) => pre + +cartItem[cur].price * 79.89,
                    0
                  )
                )}
              </span>
            </label>
          </div>
          <div className="placeorder2">
            <label>PLACE ORDER</label>
          </div>
        </div>
      ) : loader ? (
        <div className="Cart-page">
          <div className="cart-page-1">
            <div className="cart-flipkart active">
              <label>Flipkart</label>
            </div>
            <div className="cart-grocery">
              <label>Grocery</label>
            </div>
          </div>
          <div className="cart-page-2">
            <div className="cart-product">
              <img src={EmptyCart} alt="cart" />
              <label>Your cart is empty!</label>
              <label>Add items to it now.</label>
              <label onClick={() => (window.location.href = "/")}>
                Shop now
              </label>
            </div>
          </div>
        </div>
      ) : loader ? (
        <CircularProgress />
      ) : (
        <div className="Cart-page">
          <div className="cart-page-1">
            <div className="cart-flipkart active">
              <label>Flipkart</label>
            </div>
            <div className="cart-grocery">
              <label>Grocery</label>
            </div>
          </div>
          <div className="cart-page-2">
            <div className="cart-product">
              <img src={EmptyCart} alt="cart" />
              <label>Your cart is empty!</label>
              <label>Add items to it now.</label>
              <label onClick={() => (window.location.href = "/")}>
                Shop now
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
