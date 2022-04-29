import React from 'react';
import SidebarOptions from './SidebarOptions';
import profile from '../Assets/Icons/profile.svg';
import appointment from '../Assets/Icons/appointment.png';
import patient from '../Assets/Icons/patient.png';
import past from '../Assets/Icons/history.png';
import staff from '../Assets/Icons/staff.png';
import payments from '../Assets/Icons/payments.png';
import settings from '../Assets/Icons/settings.svg';
import help from '../Assets/Icons/help.svg';
import {Link} from 'react-router-dom';

import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to="/"><div className="profile_container">
                <img className='profile_pic' src={profile} alt="" />
                <div className="doc-name">Dr. Srishti</div>
                <div className="doc-category">Physician</div>
                <div className="doc-id-head">Doctor ID:</div>
                <div className="doc-id">254987</div>
            </div></Link>
            <Link to="/appointment"><SidebarOptions name={'Appointments'} icon ={appointment}/></Link>
            <Link to="/patientdata"><SidebarOptions name={'Patient Data'} icon ={patient}/></Link>
            <Link to="/prevconsultations"><SidebarOptions name={'Past Consultations'} icon ={past}/></Link>
            <Link to="/"><SidebarOptions name={'Staff'} icon ={staff}/></Link>
            <Link to="/payments"><SidebarOptions name={'Payments'} icon ={payments}/></Link>
            <Link to="/settings"><SidebarOptions name={'Setting'} icon={settings}/></Link>
            <Link to="/help"><SidebarOptions name={'Help'} icon={help}/></Link>
        </div>
    )
}

export default Sidebar
