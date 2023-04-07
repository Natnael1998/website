import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './home.css'
import { collection, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from './firebase'


const Home = () => {
  const [code,setCode]=useState('')
  const password = (19129)
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  
  return (
    <>
      <div className="HomeContain">
        <nav>
          <ul>
            <li class="logo">ETHIO-PARENTS</li>
          </ul>
          <ul>
            <li>Home</li>
            <Link to="/video">
              <li>video call</li>
            </Link>
          </ul>
        </nav>
        <section>
          <div class="contain">
            <div class="Hometitle">
              <h1>Welcome</h1>
              <h1>To Ethio Parent's</h1>
              <h1>School Website</h1>
              <p>This website helps you get your result staright</p>
              <p>from home and its highly secured so no one other</p>
              <p>than you can see your result.</p>
            </div>

            <div>
            <Link to="/add">
                <button class="button">Admin</button>
              </Link>
            <Link to="mid">
                <button class="button">Mid Exam</button>
              </Link>
              <Link to="final">
                <button class="button">Final Exam</button>
              </Link>
              <Link to="/admin">
                <button class="button">Average</button>
              </Link>
            
              <Link to="announcment">
                <button class="button">Announcment</button>
              </Link>
           
              <Link to="post-home">
                <button class="button">Assignment</button>
              </Link>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home