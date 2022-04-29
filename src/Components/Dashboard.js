import React, { useState } from "react";
import "./dashboard.css";
import profile from "../Assets/Icons/profile.svg";
import phone from "../Assets/Icons/phone.svg";
import msg from "../Assets/Icons/msg.svg";
import location from "../Assets/Icons/location.png";
import Chart from "react-apexcharts";

export default function Dashboard() {
    const [state, setState] = useState({
        options: {
          colors: ["#035b96"],
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        },
        series: [
          {
            name: "People Born",
            data: [3, 40, 5, 50, 49, 60, 70, 91],
          },
        ],
      });

  var time = new Date("2021", "07", "18", "12", "55", "20");

  return (
    <div className="profile-content">
      <div className="apt-overview">
        <div className="count-overview">
          <div className="apt-count">
            <div className="head">Total Appointments</div>
            <div className="count">1000</div>
          </div>
          <div className="apt-count" style={{ margin: "0 50px" }}>
            <div className="head">Total Patients</div>
            <div className="count">1000</div>
          </div>
          <div className="apt-count">
            <div className="head">Today's Appointments</div>
            <div className="count">1000</div>
          </div>
        </div>
        <div className="apt-graph">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="850"
            height="350"
          />
        </div>
        <div className="recent-apt">
          <div className="apt">
            <div className="head">Online Appointment</div>
            <div className="chatbox">
              <img src={profile} alt=""></img>
              <div className="patient">
                <p className="name">Patient Name</p>
                <p className="id">Patient ID</p>
              </div>
              <div className="apt-time">
                <p className="date">{time.toLocaleDateString()}</p>
                <p className="time">{time.toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="chatbox">
              <img src={profile} alt=""></img>
              <div className="patient">
                <p className="name">Patient Name</p>
                <p className="id">Patient ID</p>
              </div>
              <div className="apt-time">
                <p className="date">{time.toLocaleDateString()}</p>
                <p className="time">{time.toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="chatbox">
              <img src={profile} alt=""></img>
              <div className="patient">
                <p className="name">Patient Name</p>
                <p className="id">Patient ID</p>
              </div>
              <div className="apt-time">
                <p className="date">{time.toLocaleDateString()}</p>
                <p className="time">{time.toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="chatbox">
              <img src={profile} alt=""></img>
              <div className="patient">
                <p className="name">Patient Name</p>
                <p className="id">Patient ID</p>
              </div>
              <div className="apt-time">
                <p className="date">{time.toLocaleDateString()}</p>
                <p className="time">{time.toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
          <div className="apt">
            <div className="head">In-Clinic Appointment</div>
            <div className="chatbox">
              <img src={profile} alt=""></img>
              <div className="patient">
                <p className="name">Patient Name</p>
                <p className="id">Patient ID</p>
              </div>
              <div className="apt-time">
                <p className="date">{time.toLocaleDateString()}</p>
                <p className="time">{time.toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="chatbox">
              <img src={profile} alt=""></img>
              <div className="patient">
                <p className="name">Patient Name</p>
                <p className="id">Patient ID</p>
              </div>
              <div className="apt-time">
                <p className="date">{time.toLocaleDateString()}</p>
                <p className="time">{time.toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="chatbox">
              <img src={profile} alt=""></img>
              <div className="patient">
                <p className="name">Patient Name</p>
                <p className="id">Patient ID</p>
              </div>
              <div className="apt-time">
                <p className="date">{time.toLocaleDateString()}</p>
                <p className="time">{time.toLocaleTimeString()}</p>
              </div>
            </div>
            <div className="chatbox">
              <img src={profile} alt=""></img>
              <div className="patient">
                <p className="name">Patient Name</p>
                <p className="id">Patient ID</p>
              </div>
              <div className="apt-time">
                <p className="date">{time.toLocaleDateString()}</p>
                <p className="time">{time.toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile">
        <img src={profile} alt=" "></img>
        <div className="doctor">
          <p className="name">Dr. Srishti</p>
          <p className="category">Physician</p>
        </div>
        <div className="personal-details">
          <p className="head">Personal Details</p>
          <div className="detail">
            <img src={phone} alt=" "></img>
            <span className="value">+91-8700246074</span>
          </div>
          <div className="detail">
            <img src={msg} alt=" "></img>
            <span className="value">user@domain.com</span>
          </div>
          <div className="detail">
            <img src={location} alt=" "></img>
            <span className="value">
              c-4 market, janakpuri, new delhi-110057
            </span>
          </div>
        </div>
        <div className="personal-details">
          <p className="head">Clinic Details</p>
          <p className="name">Dr. Reddy's Clinic</p>
          <div className="detail">
            <img src={phone} alt=" "></img>
            <span className="value">+91-8700246074</span>
          </div>
          <div className="detail">
            <img src={msg} alt=" "></img>
            <span className="value">user@domain.com</span>
          </div>
          <div className="detail">
            <img src={location} alt=" "></img>
            <span className="value">
              c-4 market, janakpuri, new delhi-110057
            </span>
          </div>
        </div>
        <div className="edit-btn">Edit Profile</div>
      </div>
    </div>
  );
}
