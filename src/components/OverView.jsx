import React, { useState,useEffect } from 'react'
import {GoSearch} from "react-icons/go"
import {BsFillBellFill,BsDashLg ,BsPlusSquareFill} from "react-icons/bs"
import {RxDividerVertical} from "react-icons/rx"
import { Line } from 'react-chartjs-2'
import "../Overview.css"
import { useParams } from 'react-router-dom'
import SideBar from "./SideBar";
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement

} from "chart.js"
import { UserAuth } from '../context/AuthContext'
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement

)
const OverView = () => {
 
  const { user} = UserAuth();
  const {overviewid}= useParams()
  const [datas,setDatas]=useState([])
  const [classw, setClassw] = useState()
  const [sum,setSum]=useState()
  const [subject,setSubject]=useState()

 
  const data = {
    labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
    datasets :[{
      
data:[20,32,36,25,0,40,57,45,44,43,41,34,22,5,15],
backGroundColor:"transparent",
borderColor:"#3751FF",
pointBorderColor:"transparent",
pointBorderWidth:4,
tension:0.5,




    },
    {
      
      data:[10,42,45,49,45,45,45,45,59,59,54,53,52,51,50,49],
      backGroundColor:"transparent",
      borderColor:"#DFE0EB",
      pointBorderColor:"transparent",
      pointBorderWidth:4,
      tension:0.5,
      
      
      
          }
  
  
  ]
  };
  const options = {
    plugins:{
     
    
    },
    scales:{
     
      x :{
        position:"right",
        reverse:true,
       
        grid:{
          display :false,
          
        }
      },
      y :{
        border:{
          display:false
        },
      
        position:"right",
      
      }
     

    }
  };
  const [d, setD] = useState("")
  const [v, setV] = useState(0)
console.log(overviewid + classw + d);
     const GetData = async () => {
       onSnapshot(collection(db, overviewid+classw+d), (snapshot) =>
         setDatas(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
       );
     };
     useEffect(() => {
       GetData();
   
      
     },[classw,overviewid,d]);
  const newlistt = datas.filter((i) => i[subject] == 'chemistry');
  
  
  const newlist = datas.filter((i) => i[subject] > v)
  const newlista = datas.filter((i) => i[subject] < v);
  const newlistb = datas.filter((i) => i[subject]);
  const [g,setG] = useState(0)

  
  const lenb = (newlistb.length);
  const len = (newlist.length)
  const lena = (newlista.length);
  
  const values = [];
  
  const calculateSum = () => {
   
    datas.map((data) => {
       let total = 0;
       let count = 0;
      total += data[subject]
      count++;
      console.log(total)
      
    })

  
  };
  console.log(sum)

  
  
 

 
  
  
   
  return (
    <div>
      <SideBar />
      <div className="overview">
        <div className="overviewContain">
          <div className="overviewNav">
            <div>
              <h1 className="overviewNavText">Overview</h1>
            </div>

            <select
              name=""
              id=""
              onChange={(e) => {
                setClassw(e.target.value);
                if(e.target.value == "Mid") {
               
setV(12.5)
                }else {
                  setV(25)
                }

              }}
            >
              <option value="">select</option>

              <option value="Mid">Mid</option>
              <option value="Final">Final</option>
              <option value="Avg">Avarage</option>
            </select>


            





  <select
              name=""
              id=""
              onChange={(e) => {
                setD(e.target.value);
              }}
            >
              <option value="">section</option>

              <option value="12">12</option>
              <option value="11">11</option>
              <option value="10">10</option>
            </select>

            <select
              name=""
              id=""
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            >
              <option value="">subject</option>

              <option value="chemistry">chemistry</option>
              <option value="physics">physics</option>
              <option value="math">math</option>
            </select>

            <div className="overviewMain">
              <div className="overviewIcon">
            
                <RxDividerVertical size={32} className="line" />
              </div>

              <div className="account">
                <p>
                  Hohete tibebe
                </p>
                
              </div>
            </div>
          </div>

          <div className="boxContain">
            <div className="box">
              <p>passed</p>
              <h1>{len}</h1>
            </div>

            <div className="box">
              <p>failed</p>
              <h1>{ lena}</h1>
            </div>

            <div className="box">
              <p>Avarage</p>
              <h1>43</h1>
            </div>

            <div className="box">
              <p>students</p>
              <h1>{ lenb}</h1>
            </div>
          </div>

          <div className="graphContain">
            <div className="graphMain">
              <div className="graphItems">
                <div className="graphtext">
                  <h1>{classw}</h1>
                  <p>as of 25 May 2019, 9:41 PM</p>
                </div>

                <div className="legend">
                  <BsDashLg color="#3751FF" size={19} />
                  <p>Today</p>

                  <BsDashLg color="#DFE0EB" size={19} />
                  <p>Yesterday</p>
                </div>
              </div>
              <div className="line">
                <Line data={data} options={options}></Line>
              </div>
            </div>

            <div className="graphDataContain">
              <div className="graphData">
                <p>Subject</p>
                <h1>{ subject}</h1>
              </div>
              <div className="graphData">
                <p>Students Above 50% Score</p>
                <h1>{ len}</h1>
              </div>

              <div className="graphData">
                <p>Students Below 50% Score</p>
                <h1>{lena}</h1>
              </div>

              <div className="graphData">
                <p>data</p>
                <h1>{ lenb}</h1>
              </div>

           
            </div>
          </div>

          <div className="overviewFooter">
            <div className="footer">
              <div className="footerText">
                <div className="footerTexts">
                  <h1>Unresolved tickets</h1>
                  <p>Group: Support</p>
                </div>

                <div>
                  <p className="blue">View details</p>
                </div>
              </div>
              <div className="footerDetails">
                <div>
                  <h2 className="footerDetailsText">
                    Waiting on Feature Request
                  </h2>
                </div>

                <div>
                  <h2 className="footerDetailsNumber">4238</h2>
                </div>
              </div>

              <div className="footerDetails">
                <div>
                  <h2 className="footerDetailsText">
                    Awaiting Customer Response
                  </h2>
                </div>

                <div>
                  <h2 className="footerDetailsNumber">1005</h2>
                </div>
              </div>

              <div className="footerDetails">
                <div>
                  <h2 className="footerDetailsText">Awaiting Developer Fix</h2>
                </div>

                <div>
                  <h2 className="footerDetailsNumber">914</h2>
                </div>
              </div>

              <div className="footerDetails">
                <div>
                  <h2 className="footerDetailsText">Pending</h2>
                </div>

                <div>
                  <h2 className="footerDetailsNumber">281</h2>
                </div>
              </div>
            </div>

            <div className="footer">
              <div className="footerText">
                <div className="footerTexts">
                  <h1>Tasks</h1>
                  <p>Today</p>
                </div>

                <div>
                  <p className="blue">View all</p>
                </div>
              </div>
              <div className="footerDetails">
                <div>
                  <h2 className="footerDetailsText">Create new task</h2>
                </div>

                <div>
                  <h2 className="footerDetailsNumber">
                    <BsPlusSquareFill />
                  </h2>
                </div>
              </div>

              <div className="footerDetails">
                <div className="checkBox">
                  <input type="checkbox" />
                  <h2 className="footerDetailsText">Finish ticket update</h2>
                </div>

                <div>
                  <h2 className="footerDetailsText urgent">URGENT</h2>
                </div>
              </div>

              <div className="footerDetails">
                <div className="checkBox">
                  <input type="checkbox" />
                  <h2 className="footerDetailsText">
                    Create new ticket example
                  </h2>
                </div>

                <div>
                  <h2 className="footerDetailsText new">NEW</h2>
                </div>
              </div>

              <div className="footerDetails">
                <div className="checkBox">
                  <input type="checkbox" />
                  <h2 className="footerDetailsText">Update ticket report</h2>
                </div>

                <div>
                  <h2 className="footerDetailsText defualt">DEFAULT</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView