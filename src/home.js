import React, { useState } from 'react'

import './home.css'
import {useNavigate  } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'

const Home = () => {
    const navigate=useNavigate()
  
const { id, setId } = UserAuth();
    const [password,setPassword]=useState("")
    
  return (
    <div>
      <div class="content">
        <div class="text">EPS</div>
        <form >
          <select name="" id="" onChange={(e) => setId(e.target.value)}>
            <option value="">branch</option>
            <option value="gerji">gerji</option>
            <option value="gulele">gulele</option>
            <option value="hawassa ">hawassa</option>
          </select>
          
          <div class="field">
                      <input required="" type="password" class="input" onChange={(e) => {
                setPassword(e.target.value)         
            }} />

            <label class="label">Password</label>
          </div>
          <div class="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button class="button" onClick={(e) => {
            e.preventDefault()
                      if (id == "gerji") {
                        if (password == "1") {
                          navigate(`/overview/${id}`);
                         
                        } else {
                          alert("password ain't right");
                        }
                      } else if (id == "gulele") {
                        if (password == "2") {
                          navigate(`/overview/${id}`);
                        } else {
                          alert("password ain't right");
                        }
                      }
                      else if (id == "hawassa") {
                        if (password == "3") {
                          navigate(`/overview/${id}`);
                        } else {
                          alert("password ain't right");
                        }
                      }
                      
                      
          }} >enter</button>
       
        </form>
      </div>
    </div>
  );
}

export default Home