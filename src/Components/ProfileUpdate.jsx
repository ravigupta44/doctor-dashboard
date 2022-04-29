import React, { Component } from "react";
import './profileupdate.css';
import profile from '../Assets/Icons/profile.svg';
import PersonalDetailss from "./PersonalDetailss";
import ClinicDetails from "./clinicDetails";
import AccountDetails from "./AccountDetails";
import EducationalDetails from "./EducationalDetails";

class ProfileUpdate extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeButton:"1",
            buttons:[
                {
                    id:"1",
                    name:"Personal Details"
                },
                {
                    id:"2",
                    name:"Clinic Details"
                },
                {
                    id:"3",
                    name:"Educational Details"
                },
                {
                    id:"4",
                    name:"Account Details"
                },
            ]
        };
    }
    changeButton(id) {
        this.setState(
            {
                activeButton:id
            }
        );
    }
    render(){

        const navbar = this.state.buttons.map((btn) => {
            if(this.state.activeButton===btn.id){
                return(
                        <div id={btn.id} className="ProfileUpdate-nav-btn active">
                            <p>{btn.name}</p>
                        </div>
                );
            }
            else{
                return(
                        <div id={btn.id} onClick={()=>this.changeButton(btn.id)} className="ProfileUpdate-nav-btn">
                            <p>{btn.name}</p>
                        </div>
                );
            }
        });

        
        return(
            <div>
                <div class="container">
                    <div class="img-col">
                        <img src={profile} alt=""></img>
                    </div>

                    <div class="text-col">
                        <p className="docname">Dr Shrishti Bhatt </p>
                        <span className="profession">Psychiatrist</span>
                        <br/>
                        <span className="DocId">Doctor ID: </span>
                        <span className="ID">1234567890 </span>

                    </div>
                    
                </div>
                <span className="pictureUpload"> Upload new</span>
               
                <br/>
                <br/>

                <div className="profileupdate-navbar">
                    {navbar}
                </div>
                <div>
                   {this.state.activeButton == 1 && <PersonalDetailss/>}
                    {this.state.activeButton == 2 && <ClinicDetails/>}
                    {this.state.activeButton == 4 && <AccountDetails/>}
                    {this.state.activeButton == 3 && <EducationalDetails/>} 
                </div>
            </div>
        );
    }

}

export default ProfileUpdate;