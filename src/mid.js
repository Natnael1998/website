import React, { useState,useEffect } from 'react'
import SideBar from './components/SideBar';
import './mid.css'
import {
  collection,
  addDoc,
  updatedoc,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

import { db } from "./firebase";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserAuth } from './context/AuthContext';
const Mid = () => {
 
    const [branch, setBranch] = useState("")
     const [password, setPassword] = useState("")
     const [classe, setClasse] = useState("marklist11A");
  const [show, setShow] = useState(true)
  const {id} = UserAuth()
  const[subjecta,setSubjecta]=useState("")
  const [data, setData] = useState("")
  const [change,setChange]=useState("11Agerji")
     const GetData = async () => {
       onSnapshot(collection(db, classe+id), (snapshot) =>
         setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
       );
  };
  
    useEffect(() => {
      GetData();
  
      
      
     

      
    }, [classe]);
 
    
    return (
      <>
        <SideBar />
        {show ? (
          <div>
            <div>
              <div>
                <form class="form">
                  <h1>Mid Exam</h1>
                  <p class="form-title">
                    enter the subject you teaching and the password provided tou
                    you
                  </p>
                  <select
                    name="text"
                    id=""
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    <option value="">subject</option>
                    <option value="math">math</option>
                    <option value="civics">civics</option>
                    <option value="chemistry">chemistry</option>
                    <option value="biology ">biology</option>
                    <option value="physics ">physics</option>
                    <option value="hpe ">hpe</option>
                    <option value="it ">it</option>
                    <option value="english ">english</option>
                    <option value="amharic">amharic</option>
                  </select>

                  <div class="input-container">
                    <input
                      type="password"
                      className=""
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Enter password"
                    />
                  </div>
                  <button
                    type="submit"
                    class="submit"
                    onClick={(e) => {
                      e.preventDefault();

                      if (branch == "math") {
                        if (password == "1") {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      } else if (branch == "chemistry") {
                        if (password == 2) {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      } else if (branch == "biology") {
                        if (password == 3) {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      } else if (branch == "physics") {
                        if (password == 4) {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      } else if (branch == "hpe") {
                        if (password == 5) {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      } else if (branch == "it") {
                        if (password == 6) {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      } else if (branch == "english") {
                        if (password == 7) {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      } else if (branch == "amharic") {
                        if (password == 8) {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      } else if (branch == "civics") {
                        if (password == 9) {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      } else if (branch == "math") {
                        if (password == 1) {
                          setShow(!show);
                        } else {
                          alert("password is not right");
                        }
                      }
                    }}
                  >
                    enter
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className='anTable'>
            <div>
              <select name="" id="" onChange={(e) => setClasse(e.target.value)}>
                <option value="">--Section--</option>
                <option value="11A">11 A</option>
                <option value="11B">11 B</option>
                <option value="11C">11 C</option>
              </select>
              <div>
                <div>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead className="h">
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="left">Mid (25%)</TableCell>

                          <TableCell align="left">Submit</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>

                            <TableCell align="left">
                              <input
                                type="text"
                                name={(e) => {
                                  setSubjecta(e.target.value);
                                }}
                                onChange={(e) => setSubjecta(e.target.value)}
                              />
                            </TableCell>

                            <TableCell>
                              <button
                                className="TableButton"
                                onClick={async function n(e) {
                                  e.preventDefault();
                                  await updateDoc(
                                    doc(
                                      db,
                                      id + "Mid" + classe.slice(0, 2),
                                      row.email
                                    ),
                                    {
                                      uid: row.email,
                                      email: row.email,
                                      [branch]: subjecta,

                                      name: row.name,
                                    }
                                  );
                                  await updateDoc(doc(db, "Mid", row.email), {
                                    uid: row.email,
                                    email: row.email,
                                    [branch]: subjecta,

                                    name: row.name,
                                  });
                                }}
                              >
                                Submit
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Mid