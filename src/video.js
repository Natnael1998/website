import React, { useCallback, useState, useEffect } from "react";


import {
  collection,
  setDoc,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";
import './video.css'
import { db } from "./firebase";

import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import SideBar from "./components/SideBar";
const Video = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [item, setItem] = useState("11");
  const navigate = useNavigate();
  const handle = useCallback(async () => {
   

    navigate(`/room/${value}`);
  }, [navigate, value]);

  const GetData = async () => {
    onSnapshot(collection(db, "marklist11A"), (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };
  useEffect(() => {
    GetData();
  }, [item]);
  return (
      <div class="input-group">
          <SideBar/>
      <div class="card">
    <span class="card__title">ONLINE CLASS</span>
    <p class="card__content">enter your room id and create room
    </p>
    <div class="card__form">
        <input placeholder="Your Email" type="text" onChange={(e)=>{setValue(e.target.value)}}/>
                  <button onClick={ handle}class="sign-up"> create room</button>
    </div>
</div>
    </div>
  );
};

export default Video;
