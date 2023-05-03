
import React from "react";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  doc,updateDoc,
  onSnapshot,
  setDoc,
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
import PropTypes from 'prop-types'

import "./mid.css";
import { useNavigate } from "react-router-dom";
import SideBar from "./components/SideBar";
import { UserAuth } from "./context/AuthContext";

const Average = () => {
  const [show, setShow] = useState(true);
const {id} =UserAuth()
  const navigate = useNavigate();

  const [naol, setNaol] = useState(false);

  const [passworda, setPassworda] = useState("");
  const [passwordb, setPasswordb] = useState("");
  const [passwordc, setPasswordc] = useState("");
  const codea = "1";
  const codeb = "1";
  const { overviewid } = useParams();
  const codec = "1";

  const [data, setData] = useState([]);

  const [email, setEmail] = useState("");

  
  const [password,setPassword]=useState("")

  const [chemistry, setChemistry] = useState("");
  const [biology, setBiology] = useState("");
  const [physics, setphysics] = useState("");
  const [math, setMath] = useState();
  const [average, setAvergae] = useState("");
  const [names, setNames] = useState([]);
  const [branch,setBranch]=useState("")

  const GetData = async () => {
    onSnapshot(collection(db, branch+id), (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };
  useEffect(() => {
    GetData();
  }, [branch]);
  console.log(data);

  return (
    <>
      <SideBar />
      {show ? (
        <div>
          <div>
            <div>
              <form class="form">
                <h1>Average</h1>
                <p class="form-title">
                  enter the subject you teaching and the password provided tou
                  you
                </p>
                <select
                  name="text"
                  id=""
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option value="11A">11a</option>
                  <option value="11B">11b</option>
                  <option value="11C">11C</option>
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

                    if (branch == "11A") {
                      if (password == "1") {
                        setShow(!show);
                      } else {
                        alert("password is not right");
                      }
                    } else if (branch == "11B") {
                      if (password == 2) {
                        setShow(!show);
                      } else {
                        alert("password is not right");
                      }
                    } else if (branch == "11C") {
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
            <TableContainer component={Paper}>
              <Table sx={{ maxWidth: 550 }} aria-label="simple table">
                <TableHead className="h">
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Maths</TableCell>
                    <TableCell align="left">Physics</TableCell>
                    <TableCell align="left">Chemistry</TableCell>
                    <TableCell align="left">Submit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>

                      <TableCell align="left">
                        <input
                          type="text"
                          onChange={(e) => setMath(e.target.value)}
                        />
                      </TableCell>

                      <TableCell align="left">
                        <input
                          type="text"
                          onChange={(e) => setphysics(e.target.value)}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <input
                          type="text"
                          onChange={(e) => setChemistry(e.target.value)}
                        />
                      </TableCell>
                      <TableCell>
                        <button
                          className="TableButton"
                          onClick={async function n(e) {
                            e.preventDefault();
                            const random = Math.floor(
                              5000 + Math.random() * 10000
                            );

                            await updateDoc(
                              doc(
                                db,
                                id + "Avg" + branch.slice(0, 2),
                                row.email
                              ),
                              {
                                uid: row.email,
                                email: row.email,
                                text: average,
                                chemistry: chemistry,
                                math: math,
                                physics: physics,

                                password: random,
                                name: row.name,
                              }
                            );
                            await updateDoc(doc(db, "Avg", row.email), {
                              uid: row.email,
                              email: row.email,
                              text: average,
                              chemistry: chemistry,
                              math: math,
                              physics: physics,

                              password: random,
                              name: row.name,
                            });

                            const config = {
                              Host: "smtp.elasticemail.com",
                              Username: "naol937.bak@gmail.com",
                              Password: "38C137EF07D60A995237304E9141CA45A97F",
                              To: row.email,
                              port: 2525,
                              From: "naol937.bak@gmail.com",
                              Subject: "Your average has been submitted",
                              Body: random,
                            };
                            window.Email.send(config).then(
                              alert("your email has been sent succesfully")
                            );
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
      )}
    </>
  );
};
export default Average;
