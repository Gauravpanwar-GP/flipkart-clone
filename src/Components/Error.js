import React from 'react'
import { Link } from 'react-router-dom'
import FkLogo from '../image/FkLogo.png'
import error404 from '../image/Error-404.png'

const Error = () => {
  return (
    <>
    <div className='err'>
        <div className='bg bg-1'>
            <h1 style={{color:'#fff'}}><i>Flipkart</i></h1>
            <img src={FkLogo} className='er-logo' />
        </div>
        <div className='er'>
            <img src={error404} className='er-img' />
            <label>Unfortunately the page you are looking for has been moved or deleted</label>
            <Link to='/' className='er-home'><label>GO TO HOMEPAGE</label></Link>
        </div>
    </div>
    </>
  )
}

export default Error