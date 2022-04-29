import React, {Component} from 'react';
import './previousConsultation.css';
import profile from '../Assets/Icons/profile.svg';

function previousConsultation (){
    return(
        <div>
            <h1 className="previous">Previous Consultation</h1>
         
            <div className="filter">
            <label for="filterr">Filter</label>
            <div className="filter-option">
                        
                        <select>
                        <option>Name</option>
                        <option>PatientID</option>
                        <option>Age</option>
                        <option>Diagnosis</option>
                    </select>
              
                    </div>
                    </div>
                    <div className="filter">
                    <label for="sort by">Sort by</label>
                    <div className="filter-option"> 
                        <select>
                        <option>PatientID</option>
                        <option>Age</option>
                        <option>Last Consultation</option>
                    </select>  
                    </div>
            </div>

            <div className="patient-blocks">
                <div>
                    <img className="img" src={profile}></img>
                
            <p className= "block">
                        <span className="patientDetail"> Name:  </span> 
                        <span className="patientDetail1">  Nishant Sharma</span> 
                        <span className="patientDetail2">PatientID:</span>
                        <span className="patientDetail1">     </span>
                        <span className="patientDetail">Age:</span>
                        <span className="patientDetail1"> 25 years</span>
                        <span className="patientDetail">Gender: </span>
                        <span className="patientDetail1"> Male</span>
                        <br/> 
                        <br/>
                        <span className="patientDetail"> Diagnosis:  </span> 
                        <span className="patientDetail1">  Clinical OCD</span> 
                        <span className="patientDetail"> Last Consultation:  </span> 
                        <span className="patientDetail1">  8th July, 2021</span> 
                        <br/>
                        <br/>
                        <span className="patientDetail"> Latest Prescription:  </span> 
                        <span className="patientDetail1">  8th July, 2021</span> 
                        <button className="button1"> View</button>
                        
                        </p>         
                        </div>                     
            </div>

            <br/>
            <div className="patient-blocks">
            <img className="img" src={profile}></img>
            <p className= "block">  
                        <span className="patientDetail"> Name:  </span> 
                        <span className="patientDetail1">  Vikas Kumar</span> 
                        <span className="patientDetail2">PatientID:</span>
                        <span className="patientDetail1">     </span>
                        <span className="patientDetail">Age:</span>
                        <span className="patientDetail1"> 21 years</span>
                        <span className="patientDetail">Gender: </span>
                        <span className="patientDetail1"> Male</span>
                        <br/> 
                        <br/>
                        <span className="patientDetail"> Diagnosis:  </span> 
                        <span className="patientDetail1">  Anxiety</span> 
                        <span className="patientDetail"> Last Consultation:  </span> 
                        <span className="patientDetail1">  4th July, 2021</span> 
                        <br/>
                        <br/>
                        <span className="patientDetail"> Latest Prescription:  </span> 
                        <span className="patientDetail1">  4th July, 2021</span> 
                        <button className="button1"> View</button>
                        </p>          
            </div>
            </div>

    )
}
export default previousConsultation;