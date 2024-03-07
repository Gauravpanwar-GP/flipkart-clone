import React from 'react'
import HF from '../HOC'
import img1 from '../../image/appliances/img1.jpg'
import img2 from '../../image/appliances/img2.jpg'
import card from '../../css/card.css'
import Nav from './Nav'

const Appliances = () => {
  return (
    <>
    <Nav />
    <div className='mob'>
      <h3 className='heading'>Appliances Bonanza Sale Is Live!</h3>
      <img src={img1} className='mob_img' />
      <img src={img2} className='mob_img' />
    </div>
    <br />
    </>
  )
}

export default HF(Appliances)