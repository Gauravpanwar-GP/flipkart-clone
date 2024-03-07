import React, { useState, useEffect } from "react";
import axios from "axios";
import card from '../image/card.jpg'
import product from "../css/product.css";
import { Link, useNavigate } from 'react-router-dom'
// import {Redirect} from 'react-router-dom'
// import { useParams } from "react-router-dom";

const Products = () => {

  const [productData, setData] = useState([]);
  const navigate = useNavigate();
  
  const fetchapi = async () => {
      await axios
      .get(
        "http://fakestoreapi.com/products"
      )
      .then((response) => {
        setData(response.data)
      })
      .catch((er) => {
        console.log(er);
      });
  };
  useEffect(() => {
    fetchapi();
  }, []);


  return (
    <>
    <div className="flex-item">
      <div className="product">
        {productData.slice(5,12).map((item, index) => {
          return (
            <>
            {/* <Navigate to='/productdetails' target="_blank" params={{name:"hello"}}> */}
              <div key={index} className="product-card"
               onClick={() => {
                      navigate(`/productdetails?${item.title}`, {
                        state: {
                          data: item,
                        },
                      });
                    }}
              >
                <img src={item.image} className="product-img" alt="productImage" />
                <div className="product-flex">
                  <label className="product-title" title={item.title}>{item.title.slice(0, 20)}.....</label>
                  <label className="product-rating">
                    <span className="rating">{item.rating.rate}&#x2605;</span> &nbsp;
                    <span>({item.rating.count})</span>
                    </label>
                  <label className="product-price">&#8377;{Math.ceil(item.price * 79.89)}</label>
                </div>
              </div>
              {/* </Navigate> */}
            </>
          );
        })}
      </div>
      <div style={{marginLeft:"0.6rem"}}>
        <img src={card} className='image' />
      </div>
    </div>
    </>
  );
};

export default Products;
