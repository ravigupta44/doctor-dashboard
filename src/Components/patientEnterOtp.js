import React, {Component} from 'react';
import './patientEnterOtp.css';
import {REPORTS} from '../shared/patientInfo';

export default function PatientEnterOtp(){
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
        <div className="box">
            <div className="text1"> Patient ID</div>
            <div className="otpspace"> </div>
            <div className="otpText">OTP sent on patient number 98xxxxxx10</div>
            <div className="text1"> Enter OTP</div>
            <div className="otpspace"> </div>
            <div className="sideText1">resend otp</div>
            <button className="otpButton1">Login</button>
        </div>
        <div>
         <div className="profileTable">
         
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