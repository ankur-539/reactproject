import React, { useState } from "react";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { FaFolderClosed } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { Link } from "react-router-dom";
import Userdashboard from "./Userdashboard";
import Project from "./Project";
import Team from "./Team";
import Report from "./Report";
import Calender from "./Contact";
import Contact from "./Contact";



function Applandingpage() {

  const [activePage,setActivePage] = useState("Dashboard");

  const rendercontent = ()=> {
    if(activePage === "Dashboard") return <Userdashboard></Userdashboard>;
    if(activePage === "Team") return <Team></Team>;
    if(activePage === "Contact") return <Contact></Contact>;
    if(activePage === "Project") return <Project></Project>;
    if(activePage === "Report") return <Report></Report>;
   
  }

  return (
    <div className="container-fluid overflow-hidden">
      <div className="row d-flex ">
        {/**************start side bar*******************/}
        <div className="col-1 g-0 w-auto d-flex">
          <div className="hight width px-2 d-flex flex-column align-items-center gap-4 py-3 c-bg-3 text-white shadow">
            <VscLayoutSidebarLeft className="fs-3" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
              aria-expanded="false" aria-controls="collapseWidthExample" />
            <hr className="w-100 m-0" />
            <MdDashboard className="my-1" onClick={()=>{setActivePage("Dashboard")}}></MdDashboard>
            <MdContacts className="my-1" onClick={()=>{setActivePage("Contact")}}></MdContacts>
            <RiTeamFill className="my-1" onClick={()=>{setActivePage("Team")}}></RiTeamFill>
            <FaFolderClosed className="my-1" onClick={()=>{setActivePage("Project")}}></FaFolderClosed>
            <FaChartPie className="my-1" onClick={()=>{setActivePage("Report")}}></FaChartPie>
            <AiFillSetting className="mt-auto mb-2 fs-5"></AiFillSetting>
          </div>

          <div className="collapse collapse-horizontal w-75" id="collapseWidthExample">
            <div className="card card-body rounded-0 border-0 hight c-bg-4 gap-3">
              <p className="m-0 fw-bold fm text-light fs-4 fw-bold">AppName</p>
              <hr className="w-100 m-0 mb-1 text-light">
              </hr>
              <p className="m-0 py-1  fw-bold fm text-light abc" onClick={()=>{setActivePage("Dashboard")}}>Dashboard</p>
              <p className="m-0 py-1  fw-bold fm text-light abc" onClick={()=>{setActivePage("Contact")}}>Contact</p>
              <p className="m-0 py-1  fw-bold fm text-light abc" onClick={()=>{setActivePage("Team")}}>About</p>
              <p className="m-0 py-1  fw-bold fm text-light abc" onClick={()=>{setActivePage("Project")}}>Project</p>
              <p className="m-0 py-1  fw-bold fm text-light abc" onClick={()=>{setActivePage("Report")}}>Report</p>
              <p type="button" className="btn btn-outline-light m-0 mt-auto">
                + add new entry
              </p>
            </div>
          </div>
        </div>
        {/**************end side bar*******************/}

        <div className="col-1 g-0 flex-grow-1">
          {/**************start search bar*******************/}
          <div className=" shadow d-flex align-items-center px-4 py-3 c-bg-4 text-white hight-3">
            <FaSearch className='fs-5'></FaSearch>
            <input className="form-control border-0 w-50 mx-3 " type="search" placeholder="Search" aria-label="Search" />
            <FaRegBell className='ms-auto me-4 c-pointer fs-4'></FaRegBell>
            <div className='pro me-3 p-3'></div>
            <div className="dropdown text-white">
              <div className="dropdown-toggle c-pointer" data-bs-toggle="dropdown" aria-expanded="false">UserName</div>
              <ul className="dropdown-menu mt-3">
                <li><Link to="" className="dropdown-item" href="#">User profile</Link></li>
                <li><Link to="/usermanagement" className="dropdown-item" href="#">Sign out</Link></li>
              </ul>
            </div>
          </div>
          {/**************end search bar*******************/}

          {/**************start containt area*******************/}

          <div className="container-fluid hight-1 bg-info overflow-y-auto">
            {rendercontent()}
          </div>
          {/**************end containt area*******************/}

          {/**************start footer*******************/}
          <div className="c-bg-4 text-light shadow d-flex align-items-center gap-4 p-4 hight-2 ">
            <div>©Company</div>
            <IoLogoFacebook className='ms-auto fs-5 c-pointer opacity-75'></IoLogoFacebook>
            <IoLogoInstagram className='fs-5 c-pointer opacity-75'></IoLogoInstagram>
            <RiTwitterXLine className='fs-5 c-pointer opacity-75'></RiTwitterXLine>
            <ImGithub className='fs-5 c-pointer opacity-75'></ImGithub>
            <FaYoutube className='fs-5 c-pointer opacity-75'></FaYoutube>
          </div>
        </div>
        {/**************start footer*******************/}
      </div>
    </div>
  );
};
export default Applandingpage;