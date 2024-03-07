import React, {useRef, useState} from 'react'
import FkLogo from '../image/FkLogo.png'

const MobLogin = () => {
    
    const close = useRef();
    const show = useRef();
    const btn = useRef();
    const [em, setEm] = useState(false);
    const [pho, setPho] = useState('');
    const [email, setEmail] = useState('');

    const closeForm1 = () => {
        // close.current.style.display = "none";
        // setIsOpen(!isOpen);
        close.current.style.transition = "transform 5s ease-out";
        close.current.style.transform = 'translateY(1000%)';
      };

      const showEmail = () => {
        setEm(!em);
      }

      const Phone = e => {
        setPho(e.target.value);
      }
      
      const emll = a => {
        setEmail(a.target.value);
      }
      const open = () => {
          // window.location.href = '/Fashion';
      }

      const [isOpen, setIsOpen] = useState(true);
      // const [ triggerModal , setTriggerModal ] = useState(true);

      // const des = () => {
      //   window.location.reload();
      // }
  return (
    // typeof isOpen !== 'undefined' &&
    <>
    <div className="mob-login mob-log-1"  ref={close}>
        <div>
          <div className='log-title'>
            <span onClick={closeForm1} className='cross-sign'>&#10005;</span>
            <span className='l-title'>Flipkart &nbsp;
            <img src={FkLogo} alt='Logo' className='logo1' /></span>
          </div>
          <div className='mobLogForm'>
            <div>
              <label className='titlee'>Log in for the best experience</label>
              <div>
                <form>
                  {em ? <div className='eml' ref={show}>
                    <fieldset className='fld'>
                      <label>Enter your Email ID to continue</label>
                      <input type='email' className='input1' onChange={emll} placeholder='Email ID' />
                      {/* <label className='placeholderrr'>Email ID</label> */}
                    </fieldset>
                    <label className='log-type' onClick={showEmail}>Use Phone Number</label>
                  </div> : <div className='phn' ref={show}>
                    <label className='en-phn'>Enter your phone number to continue</label>
                    <fieldset className='fld'>
                      <input type='tel' maxLength={10} onChange={Phone} className='input1' placeholder='Phone Number' />
                      {/* <label className='placeholderr'>Phone Number</label> */}
                    </fieldset>
                    <label className='log-type' onClick={showEmail}>Use Email ID</label>
                  </div> }
                </form>
              </div>
            </div>
            <div>
            <p className="para">
              By continuing, you agree to Flipkart's &nbsp;
              <span className="t-pp">Terms of use</span> and &nbsp;
              <span className="t-pp">Privacy Policy.</span>
            </p>
            </div>
          </div>
        </div>
        <div className='logBtnBrd'>
          {em ? (/\S+@\S+\.\S+/.test(email) ? 
            <button type='submit' className='mobLogbtn' onClick={open} style={{backgroundColor:'#fb641b'}}>Continue</button> :
            <button type='submit' className='mobLogbtn' onClick={open} style={{backgroundColor:'#bebebe'}} disabled>Continue</button> ) : (pho.length === 10 ? 
              <button type='submit' className='mobLogbtn' onClick={open} style={{backgroundColor:'#fb641b'}}>Continue</button> :
              <button type='submit' className='mobLogbtn' onClick={open} style={{backgroundColor:'#bebebe'}} disabled>Continue</button> )}
        </div>
      </div>
      </>
  )
}

export default MobLogin