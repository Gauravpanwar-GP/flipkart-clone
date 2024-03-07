import React from 'react'
import { Link } from 'react-router-dom' 
import '../../css/card.css'

const nav = () => {

  return (
    <>
        <div className='navbar'>
            <div className='flex-nav'>
                <span className='flex-item nav-item nav-item' id='txt'>Electronics<svg id="arr" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="more-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="more-arrow-1"></path></svg></span>
                <span className='flex-item nav-item' id='txt1'>TV & Appliances<svg id="arr1" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="more-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="more-arrow-1"></path></svg></span>
                <span className='flex-item nav-item' id='txt2'>Men<svg id="arr2" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="more-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="more-arrow-1"></path></svg></span>
                <span className='flex-item nav-item' id='txt3'>Women<svg id="arr3" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="more-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="more-arrow-1"></path></svg></span>
                <span className='flex-item nav-item' id='txt4'>Baby & Kids<svg id="arr4" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="more-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="more-arrow-1"></path></svg></span>
                <span className='flex-item nav-item' id='txt5'>Home & Furniture<svg id="arr5" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="more-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="more-arrow-1"></path></svg></span>
                <span className='flex-item nav-item' id='txt6'>Sports, Books & More<svg id="arr6" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="more-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="more-arrow-1"></path></svg></span
                >
                <Link to='/' className='flex-item nav-item'>Flights</Link>
                <Link to='/' className='flex-item nav-item'>Offer Zone</Link>
            </div>
            <div className='dropdown'>
                <div className='dropdown1'>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                </div>
                <div className='dropdown2'>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                    <span className='drop-item'>hello</span>
                </div>
                <div className='dropdown1'><span>hello</span></div>
                <div className='dropdown2'><span>hello</span></div>
                <div className='dropdown1'><span>hello</span></div>
            </div>
            {/* {
                navbar.map((item, key) => (
                    <>
                        <div>
                            <label key={key} className='flex-item nav-item' id='txt'>{item}
                                <span><svg id="arr" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="more-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="more-arrow-1"></path></svg></span>
                            </label>
                        </div>
                    </>
                ))
            } */}
        </div>
    </>
  )
}

export default nav