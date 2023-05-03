import React from 'react'
import {FaChartPie,FaTicketAlt,FaLightbulb,FaUserCheck} from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs" 
import {RiArticleLine,RiSettings4Fill} from "react-icons/ri"
import {GiPerson} from "react-icons/gi"
import {IoMdSettings} from "react-icons/io"
import {FaAward} from "react-icons/fa"
import { Link, useParams } from 'react-router-dom'
import {GrAnnounce} from "react-icons/gr"
import {TfiAnnouncement} from "react-icons/tfi"
import {MdFactCheck} from "react-icons/md"
import "../Sidebar.css"

import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const SideBar = () => {
 
  const navigate = useNavigate() 
  const { id } = UserAuth();
  

      
  return (
    <div className="SideBar">
      <div className="LogoContain">
        <div>
          <img
            className="gg"
            src="https://th.bing.com/th/id/R.890d2fe7a1e7da935a61bab7dbbfad88?rik=C1ZVJZgYzIg2Fw&riu=http%3a%2f%2fwww.ethioparentsschool.com%2fwp-content%2fuploads%2f2015%2f04%2fethioparentsschool.com_.png&ehk=MSpfaO60Q9TLgfS7md48GDYYX9E4UiIG051S0UIViHU%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>

        <div>
          <p className="loginTitle3 ">Ethio-Parents</p>
          <p className="loginTitle2 ">{id} Branch</p>
        </div>
      </div>

      <div className="SideBarOptions">
        <div
          className="items"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/overview/${id}`);
          }}
        >
          <FaChartPie size={17} className="icon" />
          <p className="itemText">Overview</p>
        </div>

        <div
          className="items"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/tickets/${id}`);
          }}
        >
          <TfiAnnouncement size={17} className="icon" />
          <p className="itemText">Announcement</p>
        </div>

        <div
          className="items"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/attendance/${id}`);
          }}
        >
          <FaUserCheck size={17} className="icon" />
          <p className="itemText ">Attendance</p>
        </div>

        <div
          className="items"
          onClick={(e) => {
            e.preventDefault();

            navigate(`/mid/${id}`);
          }}
        >
          <RiArticleLine size={17} className="icon" />
          <p className="itemText">Mid Exam</p>
        </div>

        <div
          className="items"
          onClick={(e) => {
            e.preventDefault();

            navigate(`/final/${id}`);
          }}
        >
          <RiArticleLine size={20} className="icon" />
          <p className="itemText">Final Exam</p>
        </div>

        <div
          className="items"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/average/${id}`);
          }}
        >
          <RiArticleLine size={17} className="icon" />
          <p className="itemText"> Average</p>
        </div>

        <div className="L"></div>

        <div
          className="items"
          onClick={() => {
            navigate(`/video/${id}`);
          }}
        >
          <IoMdSettings size={17} className="icon" />
          <p className="itemText ">Online class</p>
        </div>

        <div
          className="items"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/add/${id}`);
          }}
        >
          <FaAward size={17} className="icon" />
          <p className="itemText  ">Add Students</p>
        </div>
        <div
          className="items"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/post/${id}`);
          }}
        >
          <RiArticleLine size={17} className="icon" />
          <p className="itemText  ">Assignments</p>
        </div>
        <div
          className="items"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/source/${id}`);
          }}
        >
          <RiArticleLine size={17} className="icon" />
          <p className="itemText  ">add resources</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar