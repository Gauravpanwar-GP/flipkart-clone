import React from 'react'
import BS from '../image/BS.svg'
import Ad from '../image/Ad.svg'
import GC from '../image/GC.svg'
import HC from '../image/HC.svg'
import Pay from '../image/Pay.svg'
import footer from '../css/footer.css'

const Footer = () => {
  return (
    <>
    <div className='foot-bg'>
        <div className='foot-flex'>
            <div>
                <label className='head'>ABOUT</label>
                <br />
                <br />
                <p className='p-txt'>Contact Us</p>
                <p className='p-txt'>About Us</p>
                <p className='p-txt'>Careers</p>
                <p className='p-txt'>Flipkart Stories</p>
                <p className='p-txt'>Press</p>
                <p className='p-txt'>Flipkart Wholesale</p>
                <p className='p-txt'>Corporate Information</p>
            </div>
            <div>
                <label className='head'>HELP</label>
                <br />
                <br />
                <p className='p-txt'>Payments</p>
                <p className='p-txt'>Shipping</p>
                <p className='p-txt'>Cancellation & Returns</p>
                <p className='p-txt'>FAQ</p>
                <p className='p-txt'>Report Infringement</p>
            </div>
            <div>
                <label className='head'>POLICY</label>
                <br />
                <br />
                <p className='p-txt'>Return Policy</p>
                <p className='p-txt'>Terms Of Use</p>
                <p className='p-txt'>Security</p>
                <p className='p-txt'>Privacy</p>
                <p className='p-txt'>Sitemap</p>
                <p className='p-txt'>EPR Compliance</p>
            </div>
            <div>
                <label className='head'>SOCIAL</label>
                <br />
                <br />
                <p className='p-txt'>Facebook</p>
                <p className='p-txt'>Twitter</p>
                <p className='p-txt'>YouTube</p>
            </div>
            <hr className='wid' />
            <div>
                <label className='head'>Mail Us:</label>
                <br />
                <br />
                <p className='p-txt'>Flipkart Internet Private Limited,</p>
                <p className='p-txt'>Buildings Alyssa, Begonia &</p>
                <p className='p-txt'>Clove Embassy Tech Village,</p>
                <p className='p-txt'>Outer Ring Road, Devarabeesanahalli Village,</p>
                <p className='p-txt'>Bengaluru, 560103,</p>
                <p className='p-txt'>Karnataka, India</p>
            </div>
            <div>
                <label className='head'>Registered Office Address:</label>
                <br />
                <br />
                <p className='p-txt'>Flipkart Internet Private Limited,</p>
                <p className='p-txt'>Buildings Alyssa, Begonia &</p>
                <p className='p-txt'>Clove Embassy Tech Village,</p>
                <p className='p-txt'>Outer Ring Road, Devarabeesanahalli Village,</p>
                <p className='p-txt'>Bengaluru, 560103,</p>
                <p className='p-txt'>Karnataka, India</p>
                <p className='p-txt'>CIN : U51109KA2012PTC066107</p>
                <p className='p-txt'>Telephone: 044-45614700</p>
                <p></p>
            </div>
        </div>
            <hr className='widdd' />
        <div className='foot-flex padd'>
            <div>
                <img src={BS} />
                <label className='p-txt'>Become a Seller</label>
            </div>
            <div>
                <img src={Ad} />
                <label className='p-txt'>Advertise</label>
            </div>
            <div>
                <img src={GC} />
                <label className='p-txt'>Gift Cards</label>
            </div>
            <div>
                <img src={HC} />
                <label className='p-txt'>Help Center</label>
            </div>
            <div>
                <label className='p-txt'>&copy; 2007-2022 Flipkart.com</label>
            </div>
            <div>
                <img src={Pay} />
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer