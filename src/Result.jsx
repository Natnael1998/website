import { collection, getDocs, query,onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import './result.css'
const Result = () => {
  const [data, setData] = useState({})
  const [code, setCode] = useState('')
  const [show, setShow] = useState(false)

 
    const p = useParams()
  
  
  const GetData = async () => {
        const docRef = doc(db, "marklist11A", p.id);
    const docSnap = await getDoc(docRef);
    setData(docSnap.data())

   };
  useEffect(() => {
    GetData();
    
     
  }, []);
  console.log(data)
  const handle = (e, event) => {

console.log(e)

  }
  const average =
    (parseFloat(data.math) +
      parseFloat(data.chemistry) +
      parseFloat(data.physics)) /
    3;

  return (
    <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2>Hey {data.name}</h2>
           
            <p>Hover your Mid result</p>
        </div>
        <div class="flip-card-back">
          <p class="title"></p>
          <h3>Chemistry: { data.chemistry}</h3>
          <h3>Physics: {data.physics}</h3>
          <h3>Math: { data.math}</h3>
          
        </div>
    </div>
</div>
  

   )


      
    
    
  

}

export default Result