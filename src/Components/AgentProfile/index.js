import React from "react";
import DashboardTemplate from "../../Views/template/dashboardtemplate";
import BootstrapTable from "react-bootstrap-table-next";
import Loader from "../../Components/secondLoader"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiSuitcaseLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { Container, Button, } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Upload from "../../Assets/img/upload.png";
import Filter from "../../Assets/img/filter.png";
import Print from "../../Assets/img/printer.png";
import image from "../../Assets/img/agentimage.png";
import "./style.css";
const Profile = (props) => {
    const{loading}=props
    return (
      <DashboardTemplate>
        <div className="transact-wrapper">
          {loading && (
            <Loader
              type="TailSpin"
              type="Oval"
              height={60}
              width={60}
              color="#1E4A86"
            />
          )}
          <div className="header-title">
            <h3>Agent Profile</h3>
          </div>
          <div className="agent-transact-header">
            <div>Details of Agents on mCashPoint</div>
            <div className="manage-agent">
              <span>
                <img src={Print} />
                Print
              </span>

              <span>
                <img src={Filter} />
                Filter
              </span>

              <span>
                <img src={Upload} />
                Export
              </span>
            </div>
          </div>
          <NavLink to="/agents">
            <button className="butn btns">
              <AiOutlineArrowLeft /> Back
            </button>
          </NavLink>

          <div className="profile-wrapper">
            <p className="header">Agent Profile</p>
            <hr />
            <div className="edit"><FiEdit2/></div>
            <div className="biodata">
              <div className="address">
                <div className="profile-image">
                  <img src={image}></img>
                </div>
                <div className="info">
                  <h6>Oluwatosin Aderoju</h6>
                  <label>
                    {" "}
                    <RiSuitcaseLine />
                    Sura Link Ventures
                  </label>
                  <label>
                    {" "}
                    <HiOutlineLocationMarker />
                    3, Ompasantira off Jalaogo street unity
                  </label>
                </div>
              </div>
              <div className="emailgender">
                <div className="email">
                  <label>Email</label>
                  <p>
                    <b>arkade.adea8504@gmail.com</b>
                  </p>
                </div>
                <div className="gender">
                  <label>Gender</label>
                  <p>Female</p>
                </div>
              </div>
              <div className="bank">
                <div className="bank-name">
                  <label>Bank</label>
                  <p>Zenith Bank Plc</p>
                </div>
                <div className="bank-acct">
                  <label>Account Information</label>
                  <p>2250278433 , Aderoju Oluwatosin</p>
                </div>
              </div>
              <div className="btn-group">
                <button className="btn1 btns">DEACTIVATE</button>
                <button className="btn2 btns">RESET PASSWORD</button>
                <button className="btn3 btns">GENERATE ACTIVATION CODE</button>
              </div>
            </div>
          </div>
        </div>
      </DashboardTemplate>
    );
};

export default Profile;
