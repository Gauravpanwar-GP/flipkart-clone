import React, { useState, useRef, useEffect } from 'react'
import Photo from '../image/Carousel/Photo.jpg'
import Photo1 from '../image/Carousel/Photo1.jpg'
import Photo2 from '../image/Carousel/Photo2.jpg'
import Photo3 from '../image/Carousel/Photo3.jpg'
import Photo4 from '../image/Carousel/Photo4.jpg'
import discount from '../image/discount.jpg'
import '../css/slider.css'

const Carousel = () => {

    const carousel_image = [ Photo, Photo1, Photo2, Photo3, Photo4];

    const ref = useRef();

    const [current, setCurrent] = useState(0);
    const length = carousel_image.length;

    const nextSlide = () => {
        setCurrent(current == length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current == 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(carousel_image) || carousel_image.length <= 0) {
        return null;
    }

    // window.onload(()=>{
    //     setCurrent(slide);
    // });

    const carouselImage = () => {
        // ref.current.style.transition = 'transform 1s ease-in infinite';
        // ref.current.style.transform = 'translateX(-50%)';
    }

    
  return (
    <>
    <div className='carousel' onLoad={carouselImage}>
        <div className='left-arrow'>
            <span className='left' onClick={prevSlide}>&#10094;</span>
        </div>
        <div>
            <ul className='carousel_track'>
            {
                carousel_image.map((item, index) => (
                    <div key={index}>
                        <li className='carousel_slide' id='slides' ref={ref}>
                            {index == current && (<img src={item} className='carousel-img' id='sslides' />)}</li>
                    </div>
                    ))
                }
        </ul>
        </div>
        <div className='right-arrow'>
            <span className='right' onClick={nextSlide}>&#10095;</span>
        </div>
    </div>
    <div className='dis'>
        <img src={discount} className='disimg' alt='discount' />
    </div>
    </>
  )
}

export default Carousel