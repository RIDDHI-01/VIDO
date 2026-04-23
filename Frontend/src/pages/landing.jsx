import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "../App.css"
 export default function LandingPage(){
    const router=useNavigate();
    return(
        <div className='LandingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <Link to={"/home"}> 
                    <img srcSet='/logo.png' alt='LOGO'/>
                    </Link>
                </div>
                <div className='navList'>
                    <p onClick={()=>{
                        router("/0328")
                    }}>Join as Guest</p>

                    <p onClick={()=>{
                        router("/auth")
                    }}>Register</p>

                    <p onClick={()=>{
                        router("/auth")
                    }}>Login</p>
                    
                </div>
            </nav>
            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"#FF9839"}}>Connect</span> with your Loved Ones</h1>
                    <p>Connect instantly by Vido</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src='/mobile.png' alt='image'/>
                </div>
            </div>
        </div>
    )
 }