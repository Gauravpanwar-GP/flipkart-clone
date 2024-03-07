import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './Components/Home'
import Mobiles from './Components/Categories/Mobiles'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Appliances from './Components/Categories/Appliances';
import ProductDetails from './Components/ProductDetails';
import Fashion from './Components/Categories/Fashion';
import Electronics from './Components/Categories/Electronics';
import Cart from './Components/Cart';
import { CircularProgress } from "@mui/material";
import PlaceOrder from './Components/PlaceOrder';
import Error from './Components/Error';

function App() {
  
  const [loader, setLoder] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoder(false);
    }, 2000);
  }, [])

  return (
    <>
    {loader ? <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}><CircularProgress /></div> :
    <>
    <Router>
      <Routes>
        <Route exact path="/" element = { <Home />} />
        <Route exact path="/Mobiles" element = { <Mobiles />} />
        <Route exact path='/Appliances' element = { <Appliances /> } />
        <Route exact path='/Fashion' element = { <Fashion /> } />
        <Route exact path='/Electronics' element = { <Electronics /> } />
        <Route exact path='/ProductDetails' element = { <ProductDetails /> } />
        <Route exact path='/Cart' element = { <Cart /> } />
        <Route exact path='/Placeorder' element = { <PlaceOrder /> } />
        <Route path='*' element = { <Error /> } />
      </Routes>
    </Router>
    </>
  }
  </>
  );
}

export default App;
