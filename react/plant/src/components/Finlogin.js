import React from 'react'
// import './Llogin.css';
import './script'

import { useState } from 'react'



function Finlogin() {
    const [change, setchange] = useState("")
    return (

    <div>
         
           <div className={`container ${change}`}>
                <div className="forms_container">
                    <div className="forms">
                        <form action="#" className="sign_in">
                            <h2 className="title">Sign in</h2>
                            <div className="input_box">
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input_box">
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" className="btn" />
                            <p>Follow us on our social media - </p>
                            <div className="social_media">
                                <a href="#" className="social_icons">
                                    <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" height="26px" width="26px" />
                                </a>
                                <a href="#" className="social_icons">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" height="26px" width="26px" />
                                </a>
                                <a href="#" className="social_icons">
                                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="26px" width="26px" />
                                </a>
                            </div>
                        </form>
                        <form action="#" className="sign_up">
                            <h2 className="title">Sign up</h2>
                            <div className="input_box">
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input_box">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input_box">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="input_box">
                                <input type="cpassword" placeholder="Confirm Password" />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p>Follow us on our social media - </p>
                            <div className="social_media">
                                <a href="#" className="social_icons">
                                    <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" height="26px" width="26px" />
                                </a>
                                <a href="#" className="social_icons">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" height="26px" width="26px" />
                                </a>
                                <a href="#" className="social_icons">
                                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="26px" width="26px" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="data_container">
                    <div className="sign_up_panel">
                        <div className="content">
                            <h1>First time here ?</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btnt" id="sign-up-btn" onClick={()=>{setchange("sign-up-mode")}}>
                                Sign up
                            </button>
                        </div>
                        <img src={'undraw_flowers_vx06.svg'} className="image" alt="" />
                    </div>
                    <div className="sign_in_panel">
                        <div className="content">
                            <h1>Already logged in ?</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btnt" id="sign-in-btn" onClick={()=>{setchange("")}}>
                                Sign in
                            </button>
                        </div>
                        <img src={'undraw_playing_fetch_cm19.svg'} className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
  

    
  )

}





export default Finlogin
