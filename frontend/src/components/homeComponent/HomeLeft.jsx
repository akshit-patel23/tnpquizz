import React from 'react'
import Buttons from '../Buttons'
import './HomeLeft.css'
import { Link } from "react-router-dom";

function HomeLeft() {
  return (
    
    <div className="left">
       <h1>
       Where Learning <br/>
       Meets <br/>
       </h1>
       <span><i>Excitements !!</i></span>
       <br />
       <br />
       <br />
       <Link to="/signup">
       <Buttons  Title="Get Started!!" />
       </Link>
       </div>
            
  )
}

export default HomeLeft


