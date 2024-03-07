import React, {useEffect, useState} from 'react'
import Carousel from './Carousel'
import Category from './Category'
import Grid from './Gird'
import Details from './Details'
import HF from './HOC'
import Products from './Products'
import { CircularProgress } from "@mui/material";

function Home() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])

  const [loader, setLoder] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoder(false);
    }, 2000);
  }, [])

  return (
    <>
    {loader ?
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <CircularProgress /> </div>
    :
    <>
      <Category />
      <Carousel />
      <Products />
      <Grid />
      <Details />
    </>
    }
    </>
  )
}

export default HF(Home)