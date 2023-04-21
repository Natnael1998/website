import React from 'react'
import {FaChartPie,FaTicketAlt,FaLightbulb,FaUserCheck} from "react-icons/fa"
import {BsPeopleFill} from "react-icons/bs" 
import {RiArticleLine,RiSettings4Fill} from "react-icons/ri"
import {GiPerson} from "react-icons/gi"
import {IoMdSettings} from "react-icons/io"
import {FaAward} from "react-icons/fa"
import { Link } from 'react-router-dom'
import {GrAnnounce} from "react-icons/gr"
import {TfiAnnouncement} from "react-icons/tfi"
import {MdFactCheck} from "react-icons/md"
import "../Sidebar.css"
const SideBar = () => {
    

      
  return (
    <div className='SideBar'>
<div className='LogoContain'>
    
<div>
  <img className='gg' src="https://th.bing.com/th/id/R.890d2fe7a1e7da935a61bab7dbbfad88?rik=C1ZVJZgYzIg2Fw&riu=http%3a%2f%2fwww.ethioparentsschool.com%2fwp-content%2fuploads%2f2015%2f04%2fethioparentsschool.com_.png&ehk=MSpfaO60Q9TLgfS7md48GDYYX9E4UiIG051S0UIViHU%3d&risl=&pid=ImgRaw&r=0" alt="" />
</div>

<div>
  
<p className='loginTitle3 '>Ethio-Parents</p>
<p className='loginTitle2 '>Gulele Branch</p>
</div>



</div>



<div className="SideBarOptions">
    <Link className='ll' to="/overview">
    <div className='items'>
    
 <FaChartPie  size={17} className='icon'/>
<p className='itemText'>Overview</p>
</div>

    </Link>


<Link className='ll' to="/tickets">
<div className='items'>
    
 <TfiAnnouncement size={17} className='icon' />
<p className='itemText'>Announcement</p>
</div>
</Link>
<div className='items'>
    
 <FaUserCheck size={17} className='icon'/>
<p className='itemText '>Attendance</p>
</div>



<div className='items'>
    
 <RiArticleLine size={17} className='icon'/>
<p className='itemText'>Mid Exam</p>
</div>


<div className='items'>
    
 <RiArticleLine size={20} className='icon'/>
<p className='itemText'>Final Exam</p>
</div>


<div className='items'>
    
 <RiArticleLine size={17} className='icon'/>
<p className='itemText'>Continious</p>
</div>











<div className='L'></div>

<div className='items'>
    
 <IoMdSettings size={17} className='icon'/>
<p className='itemText '>Settings</p>
</div>

<div className='items'>
    
 <FaAward size={17} className='icon'/>
<p className='itemText '>Subscription</p>
</div>

</div>




    </div>


  )
}

export default SideBar