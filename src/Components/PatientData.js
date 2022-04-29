import React, {Component} from 'react';
import './patient.css';
import Height from "../Assets/Icons/height.svg";
import Weight from "../Assets/Icons/ws.svg";
import Blood from "../Assets/Icons/blood.svg";
import Phone from "../Assets/Icons/phone.svg";
import Email from "../Assets/Icons/msg.svg";
import Home from "../Assets/Icons/Home.svg";
import Heart from "../Assets/Icons/heart.svg";
import Sugar from "../Assets/Icons/sugar.svg";
import BP from "../Assets/Icons/bp.svg";
import BG from "../Assets/Icons/bg.svg";
import Close from '../Assets/Icons/close.svg';


export default class PatientData extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeTable:"0"
        };
    }

    changeTable(id){
        this.setState (
            {
                activeTable:id
            }
        );
    }

    medicoIcon() {
        if(this.state.activeTable==="0"){
            return(
                <div className="medico-info">
                        <span onClick={() => this.changeTable("1")} className="med-detail-opt med-detail-opt-1">
                            <img src={BP}></img>
                            <span className="medico-head">Blood Pressure </span>
                            <span className="medico-value">110/70</span>
                        </span>
                        <span onClick={() => this.changeTable("2")} className="med-detail-opt med-detail-opt-2">
                            <img src={Heart}></img>
                            <span className="medico-head">Heart Rate </span>
                            <span className="medico-value">72 bpm</span>
                        </span>
                        <span onClick={() => this.changeTable("3")} className="med-detail-opt med-detail-opt-3">
                            <img src={BG}></img><br/>
                            <span className="medico-head">Haemoglobin </span>
                            <span className="medico-value">11.5 g/dl</span>
                        </span>
                        <span onClick={() => this.changeTable("4")} className="med-detail-opt med-detail-opt-4">
                            <img src={Sugar}></img>
                            <span className="medico-head">Sugar Level </span>
                            <span className="medico-value">176 mg/dl</span>
                        </span>
                </div>
            );
        }
        else if(this.state.activeTable==="1"){
            return(
                <div className="medico-info">
                        <span onClick={() => this.changeTable("1")} className="med-detail-opt med-detail-opt-1 active">
                            <img src={BP}></img>
                            <span className="medico-head">Blood Pressure </span>
                            <span className="medico-value">110/70</span>
                        </span>
                        <span onClick={() => this.changeTable("2")} className="med-detail-opt med-detail-opt-2">
                            <img src={Heart}></img>
                            <span className="medico-head">Heart Rate </span>
                            <span className="medico-value">72 bpm</span>
                        </span>
                        <span onClick={() => this.changeTable("3")} className="med-detail-opt med-detail-opt-3">
                            <img src={BG}></img><br/>
                            <span className="medico-head">Haemoglobin </span>
                            <span className="medico-value">11.5 g/dl</span>
                        </span>
                        <span onClick={() => this.changeTable("4")} className="med-detail-opt med-detail-opt-4">
                            <img src={Sugar}></img>
                            <span className="medico-head">Sugar Level </span>
                            <span className="medico-value">176 mg/dl</span>
                        </span>
                </div>
            );
        }
        else if(this.state.activeTable==="2"){
            return(
                <div className="medico-info">
                        <span onClick={() => this.changeTable("1")} className="med-detail-opt med-detail-opt-1">
                            <img src={BP}></img>
                            <span className="medico-head">Blood Pressure </span>
                            <span className="medico-value">110/70</span>
                        </span>
                        <span onClick={() => this.changeTable("2")} className="med-detail-opt med-detail-opt-2 active">
                            <img src={Heart}></img>
                            <span className="medico-head">Heart Rate </span>
                            <span className="medico-value">72 bpm</span>
                        </span>
                        <span onClick={() => this.changeTable("3")} className="med-detail-opt med-detail-opt-3">
                            <img src={BG}></img><br/>
                            <span className="medico-head">Haemoglobin </span>
                            <span className="medico-value">11.5 g/dl</span>
                        </span>
                        <span onClick={() => this.changeTable("4")} className="med-detail-opt med-detail-opt-4">
                            <img src={Sugar}></img>
                            <span className="medico-head">Sugar Level </span>
                            <span className="medico-value">176 mg/dl</span>
                        </span>
                </div>
            );
        }
        else if(this.state.activeTable==="3"){
            return(
                <div className="medico-info">
                        <span onClick={() => this.changeTable("1")} className="med-detail-opt med-detail-opt-1">
                            <img src={BP}></img>
                            <span className="medico-head">Blood Pressure </span>
                            <span className="medico-value">110/70</span>
                        </span>
                        <span onClick={() => this.changeTable("2")} className="med-detail-opt med-detail-opt-2">
                            <img src={Heart}></img>
                            <span className="medico-head">Heart Rate </span>
                            <span className="medico-value">72 bpm</span>
                        </span>
                        <span onClick={() => this.changeTable("3")} className="med-detail-opt med-detail-opt-3 active">
                            <img src={BG}></img><br/>
                            <span className="medico-head">Haemoglobin </span>
                            <span className="medico-value">11.5 g/dl</span>
                        </span>
                        <span onClick={() => this.changeTable("4")} className="med-detail-opt med-detail-opt-4">
                            <img src={Sugar}></img>
                            <span className="medico-head">Sugar Level </span>
                            <span className="medico-value">176 mg/dl</span>
                        </span>
                </div>
            );
        }
        else if(this.state.activeTable==="4"){
            return(
                <div className="medico-info">
                        <span onClick={() => this.changeTable("1")} className="med-detail-opt med-detail-opt-1">
                            <img src={BP}></img>
                            <span className="medico-head">Blood Pressure </span>
                            <span className="medico-value">110/70</span>
                        </span>
                        <span onClick={() => this.changeTable("2")} className="med-detail-opt med-detail-opt-2">
                            <img src={Heart}></img>
                            <span className="medico-head">Heart Rate </span>
                            <span className="medico-value">72 bpm</span>
                        </span>
                        <span onClick={() => this.changeTable("3")} className="med-detail-opt med-detail-opt-3">
                            <img src={BG}></img><br/>
                            <span className="medico-head">Haemoglobin </span>
                            <span className="medico-value">11.5 g/dl</span>
                        </span>
                        <span onClick={() => this.changeTable("4")} className="med-detail-opt med-detail-opt-4 active">
                            <img src={Sugar}></img>
                            <span className="medico-head">Sugar Level </span>
                            <span className="medico-value">176 mg/dl</span>
                        </span>
                </div>
            );
        }
    }

    de() {
        if(this.state.activeTable==="0"){
            return (
                <div className="prev-data-table">
                    <div className="patient-prof-de-table">
                        <span id="apt-head">Past Consultations</span>
                        <table className="de-pd-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>16 Aug 2021</td>
                                    <td>03:00 PM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="patient-prof-de-table">
                        <span id="apt-head">Past Diagnosis</span>
                        <table className="de-pd-table">
                            <thead>
                                <tr>
                                    <th>Condition</th>
                                    <th>Diagonised</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Clinical OCD</td>
                                    <td>1 week ago</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="patient-prof-de-table">
                        <span id="apt-head">Current Medication</span>
                        <table className="de-pd-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Dose</th>
                                    <th>Instruction</th>
                                    <th>Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tab. Paracetamol</td>
                                    <td>1 tab</td>
                                    <td>After food</td>
                                    <td>1 month</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="patient-prof-de-table">
                        <span id="apt-head">Common Allergies</span>
                        <table className="de-pd-table">
                            <tbody>
                                <tr>
                                    <td>Penicillin</td>
                                    <td>Pollen</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        else if(this.state.activeTable === "1"){
            return(
                <div className="prev-data-table">
                    <div className="close" onClick={()=>this.changeTable("0")}><img src={Close} alt=""></img></div>
                    <div className="medico-info-table">
                    <table className="pd-table">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Doctor Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Blood Pressure</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S. No.</td>
                                <td>Doctor Name</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>Blood Pressure</td>
                                <td>Status</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            );
        }
        else if(this.state.activeTable === "2"){
            return(
                <div className="prev-data-table">
                    <div className="close" onClick={()=>this.changeTable("0")}><img src={Close} alt=""></img></div>
                    <div className="medico-info-table">
                    <table className="pd-table">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Doctor Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Pulse Rate</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S. No.</td>
                                <td>Doctor Name</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>Pulse Rate</td>
                                <td>Status</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            );
        }
        else if(this.state.activeTable === "3"){
            return(
                <div className="prev-data-table">
                    <div className="close" onClick={()=>this.changeTable("0")}><img src={Close} alt=""></img></div>
                    <div className="medico-info-table">
                    <table className="pd-table">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Doctor Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Haemoglobin</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S. No.</td>
                                <td>Doctor Name</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>Haemoglobin</td>
                                <td>Status</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            );
        }
        else if(this.state.activeTable === "4"){
            return(
                <div className="prev-data-table">
                    <div className="close" onClick={()=>this.changeTable("0")}><img src={Close} alt=""></img></div>
                    <div className="medico-info-table">
                    <table className="pd-table">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Doctor Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Sugar Level</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S. No.</td>
                                <td>Doctor Name</td>
                                <td>Date</td>
                                <td>Time</td>
                                <td>Sugar Level</td>
                                <td>Status</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            );
        }
    }

    render(){

        const defaultTable = this.de();
        const medicoBar = this.medicoIcon();

        return(
            <div className="patient-profile-container">
                <div className="basic-info">
                    <div className="info">
                        <span id="name">Nishant Sharma</span>
                        <p id="age">
                            <span className="head">Age: </span>
                            <span className="value">32 years</span>
                        </p>
                        <p id="gender">
                            <span className="head">Gender: </span>
                            <span className="value">Male</span>
                        </p>
                        <p id="id">
                            <span className="head">Patient ID: </span>
                            <span className="value">214950</span>
                        </p>
                    </div>
                    <div className="bmi">
                            <span>
                                <img className="bmi-icon" src={Height} alt=""></img>
                                <span className="PatientDashboard_detail2">112 cms</span>
                                <br />
                                <span className="PatientDashboard_detail2 ">Height</span>
                            </span>
                            <br/>
                            
                            <span style={{marginLeft:"15px"}}>
                                <img className="bmi-icon" src={Weight} alt=""></img>
                                <span className="PatientDashboard_detail2">112 Kg</span>
                                <br/>
                                <span className="PatientDashboard_detail2" >Weight</span>
                            </span>
                            <br/>
                            <span style={{marginLeft:"15px"}}>
                                <img className="bmi-icon" src={Blood} alt=""></img>
                                <span className="PatientDashboard_detail2">O+</span>
                                <br/>
                                <span className="PatientDashboard_detail2">Blood Group</span>
                            </span>
                    </div>
                    <div className="patient-contact">
                            <div className="contact-head" style={{ textAlign: "center" }}>Contact Details</div>
                            <div >
                                <div class="contact-field">
                                    <img className="contact-icon" src={Phone} alt=""></img>
                                    <span className="value" >O939839892</span><br />
                                </div>
                                <div class="contact-field">
                                    <img className="contact-icon"  src={Email} alt=""></img>
                                    <span className="value" >ok@gmail.com</span><br />
                                </div>
                                <div class="contact-field">
                                    <img className="contact-icon" src={Home} alt=""></img>
                                    <span className="value">House nO xyz, streeet xyz.<br/> </span><br/>
                                </div>    
                            </div>
                    </div>              
                </div>
                <div className="prof-nav-bar">
                    <div className="opt">Patient Info.</div>
                    <div className="opt">Documents</div>
                    <div className="opt">Lab</div>
                    <div className="opt">Priscription</div>
                </div>
                {medicoBar}
                {defaultTable}
            </div>
        );
    }
} 

//<div className="appointment-table"></div>
//<div className="medication-table"></div>