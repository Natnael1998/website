import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import "../login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const [error,setError] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await logIn(email, password);
      navigate("/overview");
    } catch (error) {
      console.log(error);
      setError(error.message)
      alert(error.message.slice(22,-2))
    }
  };
  return (
  
    <div className='loginContainer'>
<div className="loginForm">
  <div className="logoBackGround">
<div className='logo'></div>
  </div>

  <p className='loginTitle'>Dashboard Kit</p>
<p className='loginSubTitle'>Log in to Dashboard Kit</p>
<p className='loginDetails'>Enter your email and password below</p>
  
<div className='formContain'>
  <label htmlFor="">Email</label>
  <input type="email" placeholder='Email address' 
  
  onChange={(e) => setEmail(e.target.value)}
  
  />
<div className='pass'>
<label htmlFor="">Password</label><small className='smallText'>Forgot password?</small>

</div>
  <input type="password" placeholder='Password' 
  onChange={(e) => setPassword(e.target.value)}
  
  />

  <button onClick={handleSubmit}>Log in</button>
</div>



<div className='formFooter'>
<p>Dont have an account? </p> 


<Link to="/" className='ll'><p className='highlight'>Sign up</p>
</Link>


</div>

</div>




    </div>
   
    
  )
}

export default Login