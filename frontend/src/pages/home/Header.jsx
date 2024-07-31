import React from 'react'
import Buttons from '../../components/Buttons'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
   
        <div className="logo">
            <h1>EduQuiz</h1>
<Link to="login">
<Buttons Title="Sign In"/>
</Link>
            
        </div>
   
  )
}

export default Header