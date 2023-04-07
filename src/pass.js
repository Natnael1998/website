import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pass.css"
const Pass = () => {
    const [password, setPassword] = useState();
  const [passworda, setPassworda] = useState('');
    const [passwordb, setPasswordb] = useState('');
    const [passwordc, setPasswordc] = useState('');
  const codea = "1292";
  const codeb = "1282";
  const codec = "1272";
  const navigate = useNavigate();

  return (
    <div>
      <form class="formms">
        <span class="titlee">11A</span>
        <p class="description">Enter the code provided by the admins.</p>
        <div>
          <input
          
            placeholder="Enter Your code"
            id="email-address"
            onChange={(e) => {
              setPassworda(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              if (passworda == codea) {
                navigate("/a");
              } else {
                alert("the password ain't right ");
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <form class="formms">
        <span class="titlee">11B</span>
        <p class="description">Enter the code provided by the admins.</p>
        <div>
          <input
         
            placeholder="Enter Your code"
            id="email-address"
            onChange={(e) => {
              setPasswordb(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              if (passwordb == codeb) {
                navigate("/b");
              } else {
                alert("the password ain't right ");
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <form class="formms">
        <span class="titlee">11C</span>
        <p class="description">Enter the code provided by the admins.</p>
        <div>
          <input
       
            placeholder="Enter Your code"
            id="email-address"
            onChange={(e) => {
              setPasswordc(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              if (passwordc == codec) {
                navigate("/c");
              } else {
                alert("the password ain't right ");
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pass;
