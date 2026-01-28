import React from "react";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";
import { FaFolderClosed } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";


function Applandingpage() {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row d-flex ">
        <div className="col-1 g-0 w-auto d-flex">
          <div className="hight width px-2 d-flex flex-column align-items-center gap-4 py-3 c-bg-3 text-white shadow">
            <VscLayoutSidebarLeft className="fs-3" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
              aria-expanded="false" aria-controls="collapseWidthExample" />
            <hr className="w-100 m-0" />
            <FaHome></FaHome>
            <RiTeamFill></RiTeamFill>
            <FaFolderClosed></FaFolderClosed>
            <IoCalendarNumber></IoCalendarNumber>
            <FaChartPie></FaChartPie>
            <AiFillSetting className="mt-auto mb-2 fs-5"></AiFillSetting>
          </div>

          <div class="collapse collapse-horizontal w-75" id="collapseWidthExample">
            <div class="card card-body rounded-0 border-0 hight c-bg-4 gap-3">
              <p className="m-0 fw-bold fm text-light fs-4 fw-bold">AppName</p>
              <hr className="w-100 m-0 mb-1 text-light">
              </hr>
              <p className="m-0 fw-bold fm text-light abc">Dashboard</p>
              <p className="m-0 fw-bold fm text-light abc">Team</p>
              <p className="m-0 fw-bold fm text-light abc">Project</p>
              <p className="m-0 fw-bold fm text-light abc">Calendar</p>
              <p className="m-0 fw-bold fm text-light abc">Report</p>
              <button type="button" class="btn btn-outline-light m-0 mt-auto">
                + add new entry
              </button>
            </div>
          </div>
        </div>

        <div className="col-1 g-0 flex-grow-1">
          <div className=" shadow d-flex align-items-center px-4 py-3 c-bg-4 text-white hight-3">
            <FaSearch className='fs-5'></FaSearch>
            <input class="form-control border-0 w-50 mx-3 " type="search" placeholder="Search" aria-label="Search" />
            <FaRegBell className='ms-auto me-4 c-pointer fs-4'></FaRegBell>
            <div className='pro me-3'></div>
            <div class="dropdown text-white">
              <div class="dropdown-toggle c-pointer" data-bs-toggle="dropdown" aria-expanded="false">UserName</div>
              <ul class="dropdown-menu mt-3">
                <li><a class="dropdown-item" href="#">User profile</a></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>

          <div className="hight-1 bg-info">

            {/* <div className="fs-3 fw-bold fm ps-3">Dashboard<hr className="m-0 p-0"></hr></div> */}
            <div class="container-fluid text-center">
              <div class="row pt-2">
                <div class="col hight-5 c-bg-5 g-0 p-2 pt-3 ps-3">
                  <div className="border bg-white rounded-4 w-h">

                  </div>
                </div>
                <div class="col hight-5 c-bg-5 g-0 p-2 pt-3">
                  <div className="border bg-white rounded-4 w-h">

                  </div>
                </div>
                <div class="col hight-5 c-bg-5 g-0 p-2 pt-3">
                  <div className="border bg-white rounded-4 w-h">

                  </div>
                </div>
                <div class="col hight-5 c-bg-5 g-0 p-2 pt-3 pe-3">
                  <div className="border bg-white rounded-4 w-h">

                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-9 hight-4 c-bg-5 g-0 p-2 ps-3"><div className="border bg-white rounded-4 w-h"></div></div>
                <div class="col-3 hight-4 c-bg-5 g-0 p-2 pe-3"><div className="border bg-white rounded-4 w-h"></div></div>
              </div>
              <div class="row">
                <div class="col-6 hight-5 c-bg-5 g-0 p-2 pb-3 ps-3"><div className="border bg-white rounded-4 w-h"></div></div>
                <div class="col-3 hight-5 c-bg-5 g-0 p-2 pb-3"><div className="border bg-white rounded-4 w-h"></div></div>
                <div class="col-3 hight-5 c-bg-5 g-0 p-2 pb-3 pe-3"><div className="border bg-white rounded-4 w-h"></div></div>
              </div>
            </div>
          </div>

          <div className="c-bg-4 text-light shadow d-flex align-items-center gap-4 p-4 hight-2">
            <div>©Company</div>
            <IoLogoFacebook className='ms-auto fs-5 c-pointer opacity-75'></IoLogoFacebook>
            <IoLogoInstagram className='fs-5 c-pointer opacity-75'></IoLogoInstagram>
            <RiTwitterXLine className='fs-5 c-pointer opacity-75'></RiTwitterXLine>
            <ImGithub className='fs-5 c-pointer opacity-75'></ImGithub>
            <FaYoutube className='fs-5 c-pointer opacity-75'></FaYoutube>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Applandingpage;