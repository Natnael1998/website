import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updatedoc,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./attendance.css";
import { db } from "./firebase";
import { UserAuth } from "./context/AuthContext";
import SideBar from "./components/SideBar";
import { useParams } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Input } from "@mui/material";

const Attendance = () => {
  const { attendanceid } = useParams();
  const [show, setShow] = useState(true);
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [row, setRow] = useState([]);
  const [status, setStatus] = useState("present");
  const [date, setDate] = useState("");

  const [inputs, setInputs] = useState([{
    status: "",
    date: "",
    name:"",
   
  }]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [datas, setDatas] = useState();
  const GetData =  () => {
    onSnapshot(collection(db, branch + section + attendanceid), (snapshot) =>
      setRow(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    GetData();
  }, [branch + section + attendanceid]);
  return (
    <>
      <SideBar />
      {show ? (
        <div>
          <div>
            <div>
              <form class="form">
                <p class="form-title">
                  enter the subject you teaching and the password provided tou
                  you
                </p>
                <select
                  name="text"
                  id=""
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option value="">grade</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="10">10</option>
                </select>
                <select
                  name="text"
                  id=""
                  onChange={(e) => setSection(e.target.value)}
                >
                  <option value="">Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
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
                   
                    if (branch+section == "11A") {
                      if (password == "1") {
                        setShow(!show);
                      } else {
                        alert("password is not right");
                      }
                    } else if (branch+section == "11B") {
                      if (password == 2) {
                        setShow(!show);
                      } else {
                        alert("password is not right");
                      }
                    } else if (branch+section == "11C") {
                      if (password == 3) {
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
        <div className="anTable">
           <div>
            <input
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="hey"
              type="date"
            />
          
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell align="right">status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {row.map((row,index) => (
                  
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>

                    <TableCell align="right">
                      <select
                        name=""
                        id=""
                 onChange={async (e) => {
                          await updateDoc(doc(db, 'attendance', row.email),{
                         savedShows : arrayUnion({
                           date: date,
                           status:e.target.value,
                         })
                       })
                     
                 }}
                        
                      >
                         <option  value="">
                          select
                        </option>
                        <option  value="present">
                          present
                        </option>

                        <option value="absent">
                          absent
                        </option>
                        <option  value="late">
                          late
                        </option>
                      </select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
         
        </div>
      )}
    </>
  );
};

export default Attendance;
