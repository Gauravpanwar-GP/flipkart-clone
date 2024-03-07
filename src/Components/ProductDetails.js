import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Components/Categories/Nav";
import "../css/productinfo.css";
import HF from "./HOC";
import { CircularProgress } from "@mui/material";

const ProductDetails = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  const [prodetails, setData] = useState([]);
  
  
  const Store = () =>{
      setNewCart([...newCart, prodetails])
      // alert('product Added to cart 🎉');
  }


  const getData = () =>{
    const ProData = localStorage.getItem('product')
    if(ProData){
      return JSON.parse(ProData)
    } else {
      return []
    }
  }
  const [newCart, setNewCart] = useState(getData());

  // const newCartId = () => {
  // if(newCart == null){

  // } else {
  //   newCart.find((item) => item.id == prodetails.id ).id;
  // }}

  useEffect(() => {
    setData(location.state?.data);
    window.scrollTo(0, 0);
    localStorage.setItem("product", JSON.stringify(newCart))
  }, [location.state?.data, newCart]);

  const zoomIn = () => {
    document.getElementById("p-img").style.transform = "scale(1.5)";
    // document.getElementById('aaa').style.display = `${prodetails.image}`;
  };
  const zoomOut = () => {
    document.getElementById("p-img").style.transform = "scale(1)";
  };

  const [loader, setLoader] = useState(true);
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
    setTimeout(()=>{
      setLoad(false)
    }, 5000)
  }, [])

  return (
    <>
      <Nav />
      {loader ?
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <CircularProgress /> </div>
      :
      <div className="page-layout">
        <div className="mob-title">
          <label>{prodetails.title}</label>
        </div>
        <div className="left1">
          <div className="pimg">
            <div id="p-img" onMouseEnter={zoomIn} onMouseLeave={zoomOut}>
              <img
                src={prodetails.image}
                className="productimage"
                alt={prodetails.image}
              />
            </div>
            <div className="btn">
              {
              prodetails.id !== newCart.find((item) => {return item.id === prodetails.id})?.id ? 
              <button
                className="AddToCart"
                onClick={() => {
                 Store()
                //  alert('product Added to cart 🎉');
                }}
              > 
              <svg className="V3C5bO" width="15" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg> &nbsp;ADD TO CART
              </button>
              : loading ? <div className="AddToCart" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <CircularProgress sx={{color:'#fff'}} size="20px" /></div> :
              <button
                className="AddToCart"
                onClick={() => {
                window.location.href='/cart';
                }}
              >
                <svg className="V3C5bO" width="15" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg> &nbsp;GO TO CART
              </button>
              }
              <button className="buyNow" onClick={()=>{
                Store();
                window.location.href='/placeorder';
              }}>
              <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v7.7h2.1V14L7 5.6H4.2L7 0" fill="#FFF"/></svg>
              &nbsp;BUY NOW</button>
            </div>
          </div>
        </div>
        <div className="right2" id="aaa"></div>
        <div className="right1">
          <div className="title">
            <label>{prodetails.title}</label>
          </div>
          <div>
            <span className="rating">{prodetails?.rating?.rate}&#x2605;</span>{" "}
            &nbsp;
            <span className="review">{prodetails?.rating?.count} Ratings</span>
          </div>
          <div>
            <label className="price">
              &#8377;{Math.ceil(prodetails.price * 79.89)}
            </label>
          </div>
          <div className="descrip">
            <span>Description</span>
            <br />
            <span>{prodetails.description}</span>
            <p className="pro-para">
              A 500-word essay is basically an essay with three sections that
              give clear depictions of an occasion or any item. This type of
              essay is a common article design that can be followed for
              composing any sort of exposition, for example, a descriptive
              essay, an argumentative essay, and so forth. A 500-word essay is
              mostly doled out at secondary schools and universities. Almost
              every other student faces it multiple times throughout academic
              life. It doesn't have any broad heading, so you can show all your
              latent capacity by not relying upon the subject and theme. back to
              top How to Format a 500-Word Essay? The format of a 500-word essay
              is very simple and very similar to other types of essay formats.
              The only thing that makes it different is the essay length. As the
              word count for this type of essay is less, thus the length of the
              paragraphs is also small, and the word count ranges from 75-125
              words. Each paragraph has 3-5 sentences. These sentences must be
              well-written so that despite being short in length, the sentence
              can explain its purpose. A standard format of a 500-word essay has
              the following components: Introduction The introduction is
              responsible for keeping the reader engaged. It provides a brief
              overview of the overall essay and contains the thesis statement
              for the essay topic. It provides background information about your
              essay’s topic and mentions why you chose this topic in particular.
              Also, there is a hook statement in the introduction paragraph.
              This is a statement that usually is a verse or a famous quotation.
              It is used as an opening sentence for the essay. Body Paragraphs.
              A 500-word essay is basically an essay with three sections that
              give clear depictions of an occasion or any item. This type of
              essay is a common article design that can be followed for
              composing any sort of exposition, for example, a descriptive
              essay, an argumentative essay, and so forth. A 500-word essay is
              mostly doled out at secondary schools and universities. Almost
              every other student faces it multiple times throughout academic
              life. It doesn't have any broad heading, so you can show all your
              latent capacity by not relying upon the subject and theme. back to
              top How to Format a 500-Word Essay? The format of a 500-word essay
              is very simple and very similar to other types of essay formats.
              The only thing that makes it different is the essay length. As the
              word count for this type of essay is less, thus the length of the
              paragraphs is also small, and the word count ranges from 75-125
              words. Each paragraph has 3-5 sentences. These sentences must be
              well-written so that despite being short in length, the sentence
              can explain its purpose. A standard format of a 500-word essay has
              the following components: Introduction The introduction is
              responsible for keeping the reader engaged. It provides a brief
              overview of the overall essay and contains the thesis statement
              for the essay topic. It provides background information about your
              essay’s topic and mentions why you chose this topic in particular.
              Also, there is a hook statement in the introduction paragraph.
              This is a statement that usually is a verse or a famous quotation.
              It is used as an opening sentence for the essay. Body Paragraphs A
              500-word essay is basically an essay with three sections that give
              clear depictions of an occasion or any item. This type of essay is
              a common article design that can be followed for composing any
              sort of exposition, for example, a descriptive essay, an
              argumentative essay, and so forth. A 500-word essay is mostly
              doled out at secondary schools and universities. Almost every
              other student faces it multiple times throughout academic life. It
              doesn't have any broad heading, so you can show all your latent
              capacity by not relying upon the subject and theme. back to top
              How to Format a 500-Word Essay? The format of a 500-word essay is
              very simple and very similar to other types of essay formats. The
              only thing that makes it different is the essay length. As the
              word count for this type of essay is less, thus the length of the
              paragraphs is also small, and the word count ranges from 75-125
              words. Each paragraph has 3-5 sentences. These sentences must be
              well-written so that despite being short in length, the sentence
              can explain its purpose. A standard format of a 500-word essay has
              the following components: Introduction The introduction is
              responsible for keeping the reader engaged. It provides a brief
              overview of the overall essay and contains the thesis statement
              for the essay topic. It provides background information about your
              essay’s topic and mentions why you chose this topic in particular.
              Also, there is a hook statement in the introduction paragraph.
              This is a statement that usually is a verse or a famous quotation.
              It is used as an opening sentence for the essay. Body Paragraphs A
              500-word essay is basically an essay with three sections that give
              clear depictions of an occasion or any item. This type of essay is
              a common article design that can be followed for composing any
              sort of exposition, for example, a descriptive essay, an
              argumentative essay, and so forth. A 500-word essay is mostly
              doled out at secondary schools and universities. Almost every
              other student faces it multiple times throughout academic life. It
              doesn't have any broad heading, so you can show all your latent
              capacity by not relying upon the subject and theme. back to top
              How to Format a 500-Word Essay? The format of a 500-word essay is
              very simple and very similar to other types of essay formats. The
              only thing that makes it different is the essay length. As the
              word count for this type of essay is less, thus the length of the
              paragraphs is also small, and the word count ranges from 75-125
              words. Each paragraph has 3-5 sentences. These sentences must be
              well-written so that despite being short in length, the sentence
              can explain its purpose. A standard format of a 500-word essay has
              the following components: Introduction The introduction is
              responsible for keeping the reader engaged. It provides a brief
              overview of the overall essay and contains the thesis statement
              for the essay topic. It provides background information about your
              essay’s topic and mentions why you chose this topic in particular.
              Also, there is a hook statement in the introduction paragraph.
              This is a statement that usually is a verse or a famous quotation.
              It is used as an opening sentence for the essay. Body Paragraphs
            </p>
          </div>
          <div className="btn12">
            {
              prodetails.id !== newCart.find((item) => {return item.id === prodetails.id})?.id ? 
              <span
                className="ATC"
                onClick={() => {
                 Store()
                //  alert('product Added to cart 🎉');
                }}
              > 
                ADD TO CART
              </span>
              :
              <span
                className="ATC"
                onClick={() => {
                window.location.href='/cart';
                }}
              >
                GO TO CART
              </span>
              }
            <span className="BN" onClick={()=>window.location.href='/placeorder'}>BUY NOW</span>
          </div>
        </div>
        {/* <div><input type="file" capture='user' accept='image/*' /></div> */}
      </div>
    }
    </>
  );
};

export default HF(ProductDetails);
