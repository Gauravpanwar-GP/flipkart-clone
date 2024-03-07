import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../css/product.css";
import HF from "../HOC";
import Nav from "./Nav";
import { CircularProgress } from "@mui/material";

const Fashion = () => {
  // const location = useLocation();

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  console.table(data);
  const prods = async () => {
    await axios
      .get("http://fakestoreapi.com/products")
      .then((response) => {
        const abc = response.data.filter((item) => {
          return (item.category === "men's clothing" ||
          item.category === "jewelery" ||
          item.category === "women's clothing");
        });
        setData(abc);
        console.log(abc);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const srt = useRef();
  const sortType = () =>{
    srt.current.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  const srtNn = () => {
    document.body.style.overflow = 'auto';
    srt.current.style.display = 'none';
  }

  // const [oldData, setOldData] = useState([]);
  
  // const OldData = () => {
  //   // setOldData(data);
  // }

  const plrt = () =>{
    setData((popularity)=>[...data]);
    console.log(data);
    srt.current.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  const lth = () =>{
    setData((lowToHigh)=>[...data?.sort((a, b) => (a.price > b.price ? 1 : -1))]);
    srt.current.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  const htl = () =>{
    setData((highToLow)=>[...data?.sort((a, b) => (a.price < b.price ? 1 : -1))]);
    srt.current.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    prods();
  }, []);

  const [loader, setLoder] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoder(false);
    }, 2000);
  }, [data])

  // if(loader){
  //   return(
      
  //   )
  // }

  const manProducts = () =>{
    const man = data.filter((item)=>{
      return item.category === "men's clothing";
    })
    setData(man);
  }

  const womenProducts = () => {
    const women = data.filter((item)=>{
      return item.category === "women's clothing";
    })
    setData(women);
  }

  return (
    <>
      <Nav />
      {loader ? <div style={{display:'flex', justifyContent:'center', paddingTop:'1rem',height:'70vh',alignItems:'center'}}>
        <CircularProgress />
      </div> :
      <div className="page">
        <div className="side1">
          <div className="side1-1 padd">
            <div>Filters</div>
            <div>Clear All</div>
          </div>
          <hr />
          <div className="padd cat-flex">
            <ul>
              <li>Categories</li>
              <li>&#10094; &nbsp;Clothing</li>
              <li>
                <span className="arw">&#10095;</span> &nbsp;Top Wear
              </li>
            </ul>
          </div>
          <hr />
          <div className="side1-1 padd">
            <label>GENDER</label>
            <label className="r-a">&#10094;</label>
          </div>
          <div className="padd">
            <ul>
              <li>
                <input type="checkbox" onClick={()=>manProducts()} />
                Men
              </li>
              <li>
                <input type="checkbox" onClick={()=>womenProducts()} />
                Women
              </li>
            </ul>
          </div>
          <div className="padd cat-flex">
            <div>PRICE</div>
            <div>
              <input type="range" />
            </div>
          </div>
        </div>
        <div className="mob-filter">
          <div className="sort">
            <div onClick={sortType}><label>Sort</label></div>
            <div>
            <div className="sort-ul" onClick={srtNn} ref={srt}>
              <div className="sort-types">
                <label onClick={()=>plrt()}>Popularity</label>
                <label onClick={()=>lth()}>Price-Low to High</label>
                <label onClick={()=>htl()}>Price-High to low</label>
              </div>
            </div>
            </div>
          </div>
          <div className="filter">
            <label>Filter</label>
          </div>
        </div>
        <div className="side2">
          <div className='cloth-para'>
            <p>
              If you want to stay on top of the fashion trends, then you need to
              shop for the latest and trendiest topwear from an e-commerce site
              Flipkart. Check out the amazing collection of topwear for women
              online and select the ones that suit you the best. Browse through
              stylish women’s topwear that are offered by popular brands, such
              as Only, Jockey, U&F, Darzi, Ann Springs, and more. Women can
              style a trendy tops with jeggings and sandals to nail the perfect
              casual look. Try pairing crop tops with denim shorts for the
              perfect summer look. Also, check out trendy topwear for men online
              that are sold by brands, such as Allen Solly, Wildcraft,
              FastColors, Smartees, Adidas, and more. Men can pair polo shirts &
              T-shirts with chinos and loafers for the perfect brunch or picnic
              look. To nail the perfect office look, men can pair formal shirts
              with trousers and formal shoes to look dapper and stylish. You can
              also buy trendy and fashionable topwear for kids from your
              favorite online shopping site. From T-shirts and tops to shirts
              and frocks, you can find fashionable and comfortable clothes
              online for your little ones. The information you are reading has
              been last updated on 02-Aug-22.
            </p>
          </div>
          <div className="sort1">
            <div>
              <label>Sort By: 
                <span className='active' onClick={()=>plrt()}>Popularity</span>
                <span className='active' onClick={()=>lth()}>price -- Low To High</span>
                <span className='active' onClick={()=>htl()}>price -- High To Low</span>
              </label>
            </div>
          </div>
      <div className="product1 pro-flex">
            {
            data.map((element) => {
              return (
                <>
                  <div
                    className="product-card-1"
                    onClick={() => {
                      navigate(`/productdetails?${element.title}`, {
                        state: {
                          data: element,
                        },
                      });
                    }}
                  >
                    <img
                      src={element.image}
                      className="product-img-11"
                      alt={element.image}
                    />
                    <div className="product-flex">
                      <label className="product-title" title={element.title}>
                        {element.title.slice(0, 20)}
                      </label>
                      <label className="product-rating">
                        <span className="rating">{element.rating.rate}&#x2605;</span> &nbsp;
                            <span>({element.rating.count})</span>
                      </label>
                      <label className="product-price">&#8377;{Math.floor(element.price * 79.89)}</label>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default HF(Fashion);
