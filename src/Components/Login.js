import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";
// import Header from "./Header";

const Login = (props) => {
  const ref = useRef();
  const cls = useRef();

  const [ userr, setUserr] = useState({
    phn: '',
    pass: ''
  })

  const [showLog, setshowLog] = useState(false);

  const valueOnClick = () => {
    ref.current.style.transform = "translateY(-15px)";
    ref.current.style.fontSize = "small";
  };
  const after = () => {
    ref.current.style.transform = "translateY(0)";
    ref.current.style.fontSize = "1rem";
  };

  const handleChange = event => {
    setUserr({...userr, [event.target.name]: event.target.value})
  };

  const Signup = () => {
    setshowLog(!showLog);
  }

  const closeForm = () => {
    cls.current.style.display = "none";
    document.body.style.overflow = 'auto';
  };

  const [SignUp, setSignUp] = useState({
    phone: '',
    password: ''
  });

  const [user, setUser] = useState([]);

  const signUp = event => {
    setSignUp({...SignUp, [event.target.name]: event.target.value});
  }

  let oldData = JSON.parse(localStorage.getItem('users'));

  const userSignUp = () => {
    setUser((data)=>{
      return [...oldData, ...data, SignUp];
    });
    localStorage.setItem('users', JSON.stringify(user));
  }

  const [loggedUser, setLoggedUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState();
  const wrong = useRef();

  // console.log(userr.phn);
  const getUser = event => {
    event.preventDefault();
    
    // console.log(userr.phn, userr.pass)
    // console.log(logusers.find((userData, index)=>{return userData.password === userr.pass}), "sfajd");
    // console.log(userr.phn !== logusers.find((userData)=>{return userData.phone === userr.phn})?.phone);

    if(userr.phn !== logusers.find((userData)=>{return userData.phone === userr.phn})?.phone || userr.pass !== logusers.find((userData)=>{return userData.password === userr.pass})?.password){
    alert('wrong info');
    wrong.current.style.display = 'block';
  } else {
    alert('success');
    setLoggedIn(sessionStorage.setItem('LoggedUser', JSON.stringify(userr)));
    window.location.href='/';
  } 
}

let logusers = JSON.parse(localStorage.getItem('users'));

  useEffect(()=>{
    // setLoggedUser(JSON.parse(localStorage.getItem('users')));
  }, [loggedIn])
  
  return (
    <>
    {showLog ? 
    <div className="log-bg" ref={cls} onFocus={after}>
    <div className={`form-popup ${props.log}`} tabIndex="-1">
      <div className="cll">
        <button className="close" onClick={closeForm}>
          X
        </button>
        <div className="form">
          <div className="form-1 row">
            <div className="leftside col col-1 bg-img">
                <span className="log">Looks like you're new here!</span>
                <p className="des">
                  Sign up with your mobile number to get started
                </p>
            </div>
            <div className="rightside col">
                <form onSubmit={userSignUp}>
                  <div className="log-flex">
                    <input
                      type="text"
                      className="input"
                      autoFocus
                      name="phone"
                      maxLength={10}
                      onSelect={valueOnClick}
                      onChange={signUp}
                      value={SignUp.phone}
                      autoComplete="off"
                    />
                    <span></span>
                    <label className="placeholder" ref={ref}>
                      Enter Mobile number
                    </label>
                  </div>
                  <div className="log-flex">
                    <input
                      type="password"
                      className="input"
                      name="password"
                      onSelect={valueOnClick}
                      onChange={signUp}
                      value={SignUp.password}
                      autoComplete="off"
                    />
                    <span></span>
                    <label className="placeholder" ref={ref}>
                      Create Password
                    </label>
                  </div>
                  <div>
                    <p className="para">
                      By continuing, you agree to Flipkart's{" "}
                      <span className="t-pp">Terms of use</span> and{" "}
                      <span className="t-pp">Privacy Policy.</span>
                    </p>
                  </div>
                  <div>
                    <div>
                    <button type="submit" className="log-btn" onClick={userSignUp}>
                      Continue
                    </button>
                    </div>
                    <br />
                    <div>
                      <button className="log-btn-1" onClick={Signup}>Existing User? Login</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> :
      <div className="log-bg" ref={cls} onFocus={after}>
        <div className={`form-popup ${props.log}`} tabIndex="-1">
          <div className="cll">
            <button className="close" onClick={closeForm}>
              X
            </button>
            <div className="form">
              <div className="form-1 row">
                <div className="leftside col col-1 bg-img">
                    <span className="log">Login</span>
                    <p className="des">
                      Get access to your Orders, Wishlist and Recommendations
                    </p>
                </div>
                <div className="rightside col">
                    <form onSubmit={getUser}>
                      <div className="log-flex">
                        <input
                          type="text"
                          className="input"
                          autoFocus
                          name='phn'
                          onChange={handleChange}
                          onSelect={valueOnClick}
                          autoComplete="off"
                        />
                        <span></span>
                        <label className="placeholder" ref={ref}>
                          Enter Email/Mobile number
                        </label>
                        <span ref={wrong} style={{display:'none',color:'red',top:'65px', fontSize:'small', position:'absolute'}}>Please enter valid Email ID/Mobile number</span>
                      </div>
                      <div className="log-flex">
                        <input
                          type="password"
                          className="input"
                          name='pass'
                          onSelect={valueOnClick}
                          onChange={handleChange}
                          autoComplete="off"
                        />
                        <span></span>
                        <label className="placeholder1" ref={ref}>
                          Enter Password
                        </label>
                        <label className="placeholder2">Forgot?</label>
                      </div>
                      <div>
                        <p className="para">
                          By continuing, you agree to Flipkart's{" "}
                          <span className="t-pp">Terms of use</span> and{" "}
                          <span className="t-pp">Privacy Policy.</span>
                        </p>
                      </div>
                      <div>
                        <button type="submit" className="log-btn">
                          Login
                        </button>
                      </div>
                      <div>
                        <div className="or">OR</div>
                        <button className="log-btn-1">Request OTP</button>
                      </div>
                      <div className="can">
                        <label className="t-pp" onClick={Signup}>
                          New to Flipkart? Create an account
                        </label>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Login;
