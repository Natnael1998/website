import React from "react";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  doc,
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

import "./admin.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [show, setShow] = useState(true);



  const navigate = useNavigate();

  const [naol, setNaol] = useState(false);

  const [passworda, setPassworda] = useState("");
  const [passwordb, setPasswordb] = useState("");
  const [passwordc, setPasswordc] = useState("");
  const codea = "1";
  const codeb = "1";
  const codec = "1";

  const [data, setData] = useState([]);

  const [email, setEmail] = useState("");

  const [classe, setClasse] = useState("");

  const [chemistry, setChemistry] = useState("");
  const [biology, setBiology] = useState("");
  const [physics, setphysics] = useState("");
  const [math, setMath] = useState();
  const [average, setAvergae] = useState("");
  const [names, setNames] = useState([]);

  const GetData = async () => {
    onSnapshot(collection(db, classe), (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };
  useEffect(() => {
    GetData();
  }, [classe]);
  console.log(data);

  return (
    <>
      {show ? (
        <div>
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
                      setShow(!show);
                      setClasse("marklist11A");
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
                      setClasse("marklist11B");

                      setShow(!show);
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
                      setShow(!show);
                      setClasse("marklist11C");
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
        </div>
      ) :  <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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

                        await setDoc(doc(db, "Avg11", row.email), {
                          uid: row.email,
                          email: row.email,
                          text: average,
                          chemistry: chemistry,
                          math: math,
                          physics: physics,

                          password: random,
                          name: row.name,
                        }).then(navigate("/"));

                        const config = {
                          Host: "smtp.elasticemail.com",
                          Username: "naol937.bak@gmail.com",
                          Password: "38C137EF07D60A995237304E9141CA45A97F",
                          To: row.email,
                          port: 2525,
                          From: "naol937.bak@gmail.com",
                          Subject:
                            "get this code to see you son average mate",
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
    </div>}
    </>
  );
};
export default Admin;
