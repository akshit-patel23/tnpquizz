import React, { useState } from 'react';
import './SignUp.css'; 
import student from '../../assets/images/student.png'
import teacher from '../../assets/images/teacher.png'


function SignUpForm() {
    const [role, setRole] = useState("student"); // for managing the role

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    enrollment:'',
    branch:'',
    passoutyear:'',
    linkedin:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //submit logic
    console.log('Form submitted:', formData);
    //  form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      enrollment:'',
      branch:'',
      passoutyear:'',
      linkedin:''
    });
  };

  return (
    <div className='Signup'> 
    <div className="image">
    <img src={role==='student'?student:teacher} alt="role-image" />
    </div>
    <h1>Select Your Role</h1>
    <div className="signup-buttons">
        <button onClick={() => setRole("student")}>Student</button>
        <button onClick={() => setRole("teacher")}>Teacher</button>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      {role==="student"&&(
        <label>
        Enrollment No
        <input
          type="text"
          name="enrollment"
          value={formData.enrollment}
          onChange={handleChange}
        />
      </label>
        )}
       {role==="student"&&(
    <label>
      Branch
      <input 
        className='branch'
        type="text"
        name="branch"
        value={formData.branch}
        onChange={handleChange}
      />
    </label>
       )}
       {role==="student"&&(
    <label>
      Passout Year <br /> 
      <input
        type="number"
        name="passoutyear"
        min="1900" max="2100"
        value={formData.passoutyear}
        onChange={handleChange}
      />
    </label>
       )}
       {role==="student"&&(
    <label>
      Linked In
      <input
        type="email"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
      />
    </label>
       )}
      

      <button type="submit">Sign Up</button>
    </form>
    </div>
   
  );
}

export default SignUpForm;
