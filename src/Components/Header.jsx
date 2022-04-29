import React, { useState } from "react";
import search from '../Assets/Icons/search.svg';
import msgIcon from '../Assets/Icons/msg.svg';
import bell from '../Assets/Icons/Notification.svg';
import logout from '../Assets/Icons/logout.svg';
import "./Header.css";

const Header = () => {
  const date = new Date();
  const [time,settime] = useState(date)

  const newtime = ()=>{
      settime(new Date())
  }
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  setInterval(newtime,1000)

  return (
    <div className="header">
      <div className="navinput_container">
        <input type="text" placeholder="Search" />
        <div className="searchimg_container">
          <img id="nav_searchicon" src={search} alt="" />
        </div>
      </div>
      <img id="nav_messageicon" src={msgIcon} alt="" />
      <img id="nav_notificationicon" src={bell} alt="" />
      <div className="patient_logout_container">
        <img id="nav_logouticon" src={logout} alt="" />
        <p>Logout</p>
      </div>
        <div className="time_container">
            <div className="time">{`${time.getHours()}:${time.getMinutes()}`}</div>
            <div className="date"> {`${months[time.getMonth()]} ${time.getDate()},${time.getFullYear()}`}</div>
        </div>
        </div>
  );
};

export default Header;
