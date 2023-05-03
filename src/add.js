import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { async } from "@firebase/util";
import SideBar from "./components/SideBar";
import axios from "axios";
import './add.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "./context/AuthContext";
const Add = () => {
  const {id} = UserAuth()
    
    const [inputs, setInputs] = useState([
      { name: "", email: "", password: "" },
    ]);
    const [pass, setPass] = useState("");
    const [code, setCode] = useState(1);
    const [branch,setBranch]=useState("")
    const [classw, setClassw] = useState("marklist11A");
    const [show, setShow] = useState(true);
    const handleInputChange = (index, event) => {
      const { name, value } = event.target;
      const newInputs = [...inputs];
      newInputs[index][name] = value;
      setInputs(newInputs);
    };

    const handleAddInput = () => {
      const newInputs = [...inputs, { name: "", email: "", password: "",phone:"" }];
      setInputs(newInputs);
    };
    const [inputss, setInputss] = useState({
      name: "",
      email: "",
        password: "",
      phone:"",
    });
 

    const handleSubmit = (event) => {
      event.preventDefault();

      
      inputs.map((i) => {
        createUserWithEmailAndPassword(auth, i.email, i.password);

        setDoc(doc(db, classw+id, i.email), {
          name: i.name,
          email: i.email,
         password: i.password,
          phone:i.phone,
        });
       
        
        setDoc(doc(db, "marklist", i.email), {
          name: i.name,
          email: i.email,
          password: i.password,
          phone: i.phone,
        });
        
        
        setDoc(doc(db, "Avg", i.email), {});
        setDoc(doc(db, "Mid", i.email), {});
        setDoc(doc(db, "Final", i.email), {});
        setDoc(doc(db, "attendance" + id, i.email), {});
           axios({
             method: "post",
             url: "https://rest.nexmo.com/sms/json",
             params: {
               api_key: "b13599fc",
               api_secret: "ZTVV2WJU4UbanzEo",
               to:i.phone,
               from: "ETHIOPARENTS-SCHOOL",
               text: "hey parents,Password:"+i.password+"email,"+i.email+"login with this password and email so you will be able to see ur child result"
             },
             headers: {
               "Content-Type": "application/x-www-form-urlencoded",
             },
           })
             .then(function (response) {
               console.log(response);
             })
             .catch(function (error) {
               console.log(error);
             });
        
        
        setDoc(doc(db, id + "Final" + classw.slice(0, 2), i.email), {});
        setDoc(doc(db, id + "Mid"+classw.slice(0,2), i.email), {});
        setDoc(doc(db, id + "Avg"+classw.slice(0,2), i.email), {});

        
      });
      setInputs([{ name: "", email: "", password: "" }]);
    };

    
    return (
      <>
            <SideBar />
        {show ? (
          <div>

            <form class="form">
              <p class="form-title">enter the password for the admins </p>

              <div class="input-container">
                <input
                  placeholder="Enter password"
                  type="password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />

                <span>
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
              <button
                class="submit"
                type="submit"
                onClick={(e) => {
                  if (code == pass) {
                    setShow(!show);
                  } else if (code != pass) {
                    alert("your password is incorrect");
                  }
                }}
              >
                enter
              </button>
            </form>
          </div>
        ) : (
          <div className="anTable">
            <select
              name=""
              id=""
              onChange={(e) => {
                setClassw(e.target.value);
              }}
            >
              <option value="">section</option>

              <option value="11A">11A</option>
              <option value="11B">11B</option>
              <option value="11C">11C</option>
            </select>
         
            <form onSubmit={handleSubmit}>
              {inputs.map((input, index) => (
                <div className="inputGroup" key={index}>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={input.name}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={input.email}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={input.password}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    placeholder="phone"
                    name="phone"
                    value={input.phone}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              ))}

              <div class="centered">
                <div class="plus" id="plus" onClick={handleAddInput}>
                  <div class="plus__line plus__line--v">
                    <a href="#" class="plus__link ion-person"></a>
                    <a href="#" class="plus__link ion-images"></a>
                    <a href="#" class="plus__link ion-music-note"></a>
                    <a href="#" class="plus__link ion-location"></a>
                  </div>
                  <div class="plus__line plus__line--h"></div>
                </div>
                <button class="download-button">
                  <div class="docs">
                    <svg
                      class="css-i6dzq1"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      fill="none"
                      stroke-width="2"
                      stroke="currentColor"
                      height="20"
                      width="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line y2="13" x2="8" y1="13" x1="16"></line>
                      <line y2="17" x2="8" y1="17" x1="16"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>{" "}
                    add students
                  </div>
                  <div class="download">
                    <svg
                      class="css-i6dzq1"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      fill="none"
                      stroke-width="2"
                      stroke="currentColor"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                    ></svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        )}
      </>
    );
    
};

export default Add;
