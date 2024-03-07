import React from 'react'
import HF from '../HOC'
import img1 from '../../image/mobile/img1.jpg'
import img2 from '../../image/mobile/img2.jpg'
import img3 from '../../image/mobile/img3.jpg'
import img4 from '../../image/mobile/img4.jpg'
import img5 from '../../image/mobile/img5.jpg'
import img6 from '../../image/mobile/img6.jpg'
import img7 from '../../image/mobile/img7.jpg'
import img8 from '../../image/mobile/img8.jpg'
import img9 from '../../image/mobile/img9.jpg'
import card from '../../css/card.css'
import Nav from '../Categories/Nav'

const Mobiles = () => {

  const mobile = [ img1, img2, img3, img4, img5, img6, img7, img8, img9 ];

  return (
    <>
    <Nav />
      <div className='mob'>
        <h3 className='heading'>Mobiles Big Saving Days July 2022</h3>
        <p>Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on Flipkart. Whether you’re looking for waterdrop notch screens, a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs. The information you are reading has been last updated on 29-Jul-22. </p><br />
        {
          mobile.map((item) => (
            <img src={item} className='mob_img' />
          ))
        }
      </div>
    </>
  )
}

export default HF(Mobiles)