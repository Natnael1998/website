import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import {auth, db} from "./firebase"
import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clicked11a, setClicked11a] = useState(true);
  const [clicked11b, setClicked11b] = useState(false);
  const [clicked11c, setClicked11c] = useState(false);
  


  const addData11A = async(e) => {
    e.preventDefault();
try{
  createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(db, "marklist", email), {
    name: name,
    email: email,
    password:password,
    
  });
  await setDoc(doc(db, "marklist11A", email), {
    name: name,
    email: email,
    password:password,
    
  });
  await setDoc(doc(db, "Mid11", email), {
   
    
  });
  await setDoc(doc(db, "Avg11", email), {
   
    
  });
  await setDoc(doc(db, "Final11", email), {
   
    
  });


alert("Succesfully Submited")

}
catch(err){
  console.log(err)
  alert("Error try Again")

}
  };
  const addData11B = async(e) => {
    e.preventDefault();
    
    try{
      createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, "marklist", email), {
        name: name,
        email: email,
    password:password,
        
      });
      await setDoc(doc(db, "marklist11B", email), {
        name: name,
        email: email,
    password:password,
        
      });
      await setDoc(doc(db, "Mid11", email), {
   
    
      });
      await setDoc(doc(db, "Avg11", email), {
   
    
      });
      await setDoc(doc(db, "Final11", email), {
       
        
      });

      alert("Succesfully Submited")
      
      }
      catch(err){
        alert("Error try Again")
      
      }

  };
  const addData11C = async (e) => {
e.preventDefault();
try{
  createUserWithEmailAndPassword(auth, email, password)

  await setDoc(doc(db, "marklist", email), {
    name: name,
    email: email,
    password:password,
    
  });
  await setDoc(doc(db, "marklist11C", email), {
    name: name,
    email: email,
    password:password,
    
  });
  await setDoc(doc(db, "Mid11", email), {
   
    
  });
  await setDoc(doc(db, "Avg11", email), {
   
    
  });
  await setDoc(doc(db, "Final11", email), {
   
    
  });

  alert("Succesfully Submited")
  
  }
  catch(err){
    alert("Error try Again")
  
  }

  };

  const Handle11A = (e) => {
    e.preventDefault();
    setClicked11a(true)
    setClicked11c(false)
    setClicked11b(false)


  };
  const Handle11B = (e) => {
    e.preventDefault();
    setClicked11a(false)
    setClicked11c(false)
    setClicked11b(true)

  };
  const Handle11C = (e) => {
    e.preventDefault();
    setClicked11a(false)
    setClicked11c(true)
    setClicked11b(false)
  };

  return (
    <>
      <div class="login-page">
        {clicked11a && (
          <div class="form">
            <form class="login-form">
              <h2>11 A Registration</h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
               <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button onClick={
                addData11A}>Add Student</button>
              <p class="message">
                Choose Your Class? <a onClick={Handle11B}>11 B</a> or <a onClick={Handle11C}>11 C</a>
              </p>
            </form>
          </div>
        )}
        {clicked11b && (
          <div class="form">
            <form class="login-form">
              <h2>11 B Registration</h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"

                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
               <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button onClick={
                addData11B}>Add Student</button>
              <p class="message">
                Choose Your Class? <a onClick={Handle11A}>11 A</a> or <a onClick={Handle11C}>11 C</a>
              </p>
            </form>
          </div>
        )}
        {clicked11c && (
          <div class="form">
            <form class="login-form">
              <h2>11 C Registration</h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
               <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button onClick={
               addData11C}>Add Student</button>
              <p class="message">
                Choose Your Class? <a  onClick={Handle11A}>11 A</a> or <a  onClick={Handle11B}>11 B</a>
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Add;
