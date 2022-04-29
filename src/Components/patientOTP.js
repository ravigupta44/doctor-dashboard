import React, {Component} from 'react';
import './patientOtp.css';
import {REPORTS} from '../shared/patientInfo';

export default function PatientOtp(){
    var count = 0;

    const reportsData = REPORTS.map((report) => {
        count = count+1;
        return(
            <tr>
                <td>{report.id}</td>
                <td>{report.Patientname}</td>
                <td>{report.date}</td>
                <td>{report.time}</td>
                <td>
                    <a className="report-btn" href="/" target="_blank">View</a>
                </td>
            </tr>
        );
    });
    return(
        <div>
        <div className="box1">
            <div className="text"> Patient ID</div>
            <div className="otpspace"> </div>
            <div className="sideText">or use E-mail instead</div>
            <button className="otpButton">Send OTP</button>
        </div>
        <div>
         <div className="profileTable1">
         
             <table>
                 <thead>
                     <tr>
                         <th> ID</th>
                         <th> Patient's Name</th>
                         <th>Date</th>
                         <th>Time</th>
                         <th>Access profile</th>
                        
                         <th></th>
                     </tr>
                 </thead>
                 <tbody>
                 {reportsData}
                 </tbody>
             </table>
         </div>
         </div>
         </div>
         
    )

}