import { useState ,useEffect} from 'react';
import React from 'react'
import SideBar from './SideBar';
import { useParams,useNavigate } from 'react-router-dom';
import {
  collection,
  setDoc,
  doc,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import '../ticket.css'
const Tickets = () => {
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [date, setDate] = useState("")
  const [text,setText]=useState("")
  const p = useParams();

  const [show, setShow] = useState(false);
   
  const navigate = useNavigate();
  
      const GetData = async () => {
        onSnapshot(collection(db, "marklist"), (snapshot) =>
          setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
      };
        useEffect(() => {
          GetData();
        }, []);

  const code = (4)
 

    

  return (
    <div>
      <SideBar />
      <div>
        <div class="contact-form">
          <span class="heading">Announcment</span>
          <form>
            <label for="name">date</label>
            <input
              type="date"
              required=""
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <label for="password">password:</label>
            <input
              required=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required=""
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                if (password == code) {
                  setDoc(doc(db, "announcment"," director"), {
                    text: text,
                    date:date
                    }).then(alert("hey"))
                  
                }
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tickets