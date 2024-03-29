import React, { useRef } from "react"
import './homepagetop.css'
import netflixLogo from '../assests/netflix-logo.png'

const HomepageTop = ()=>{
    let emailRef = useRef()
    const sumbitHandler = async (e)=>{
        e.preventDefault()
        const userEmail =(emailRef.current.value)
    }
    return(
        <div className="homepage-top">
        <div className="top">
            <img src={netflixLogo} alt="" className="logo"/>
            <div className="btn-ctn">
                <select className="language-options">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
                <button className="login-btn">Login</button>
            </div>
        </div>

      <div className="content-ctn">
        <h1 className="heading1">Unlimited movies, TV shows and more</h1>
        <h3 className="heading2">Watch anywhere. Cancel anytime.</h3>
        <p className="para">Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="input-ctn">
            <input type="email" placeholder="enter your email to get started" className="ip-f" ref={emailRef}/>
            <button className="get-started-button" type="submit" onClick={sumbitHandler}>Get Started</button>
        </form>
      </div>

    </div>
    )
}

export default HomepageTop