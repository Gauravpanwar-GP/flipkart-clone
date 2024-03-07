import React from 'react'
import Mobiles from '../image/category_image/Mobiles.jpg'
import Fashion from '../image/category_image/Fashion.jpg'
import Electronics from '../image/category_image/Electronics.jpg'
import Beauty from '../image/category_image/Beauty.jpg'
import Home from '../image/category_image/Home.jpg'
import Appliances from '../image/category_image/Appliances.jpg'
import Furniture from '../image/category_image/Furniture.jpg'
import Travel from '../image/category_image/Travel.jpg'
import Grocery from '../image/category_image/Grocery.jpg'
import categ from '../css/categ.css'
import { Link } from 'react-router-dom'

const Category = () => {
    const categories = [
        { name: 'Mobiles', image: Mobiles, },
        { name: 'Fashion', image: Fashion },
        { name: 'Electronics', image: Electronics },
        { name: 'Beauty', image: Beauty },
        { name: 'Home', image: Home },
        { name: 'Appliances', image: Appliances },
        { name: 'Furniture', image: Furniture },
        { name: 'Travel', image: Travel },
        { name: 'Grocery', image: Grocery },
    ];
  return (
    <div className='cat-bg flex'>
        {categories.map((item,index)=>(
          <Link to={`/${item.name.toLowerCase()}`} className='link'>
                <div key={index} className='cat click'>
                    <img src={item.image} className='cat-img' />
                    <span className='cat-name'>{item.name}</span>
                </div>
          </Link>
        ))
        }
    </div>
  )
}


export default Category