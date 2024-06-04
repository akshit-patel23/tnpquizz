import React, { useState } from 'react'
import login from '../../assets/images/login.png'
import './Login.css'

function Login() {

const [formData,setFormData]= useState({
    email:'',
    password:'',
})
 
const handle=(e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
};
const handlesubmit=(e)=>{
    e.preventDefault();
    //submit logic
    console.log('Form submitted:', formData);
    setFormData({
        email:'',
        password:'',
    })

}



  return (
    
    <div className='Login'> 
    <div className="image">
   <img src={login} alt="login image" />
    </div>
    <h1>Welcome Back!!</h1>
    
     <form  className="Login-form" action={handlesubmit}>
     <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handle}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handle}
        />
      </label>
      <button type="submit">Login</button>
        
     </form>


    </div>
  )
}

export default Login