import React from 'react'
import Grid1 from '../image/Carousel/Grid1.jpg'
import Grid2 from '../image/Carousel/Grid2.jpg'
import Grid3 from '../image/Carousel/Grid3.jpg'
import Grid4 from '../image/Carousel/Grid4.jpg'
import Grid5 from '../image/Carousel/Grid5.jpg'
import Grid6 from '../image/Carousel/Grid6.jpg'
import card from '../css/card.css'

const Grid = () => {
    const gridimg = [
        { image: Grid1 },
        { image: Grid2 },
        { image: Grid3 }
    ];
    const gridimage = [
        { image: Grid4 },
        { image: Grid5 },
        { image: Grid6 }
    ];
  return (
    <>
      <div className='card'>
        { gridimg.map((item, key) =>(
          <div key={key} className='card-1'>
            <img src={item.image} className='img-card' />
          </div>
            ))
        }
        </div>
        <div className='card'>
        { gridimage.map((item, key) =>(
          <div key={key} className='card-2'>
            <img src={item.image} className='img-card' />
          </div>
            ))
        }
        </div>
    </>
  )
}

export default Grid