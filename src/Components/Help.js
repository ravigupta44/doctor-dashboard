import React, {Component} from 'react';
import './Help.css';
import Phone from "../Assets/Icons/phone.svg";
import Email from "../Assets/Icons/msg.svg";

class Help extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        };
    }

    render(){
        return(
            <div className="HelpMain">
                <div className="HelpForm">
                    <div className="HeadHeading"> Submit Your Query </div>
                    <div className="HelpDetails">
                        <input className="HelpInput" type="text" placeholder="Name"></input>
                        <input className="HelpInput" type="text" placeholder="Phone Number"></input>
                        <input className="HelpInput" type="text" placeholder="Email"></input>
                        <textarea className="HelpText" placeholder="Query"></textarea>
                        <div style={{marginTop:"2%"}}><button className="HelpBtn">Submit</button></div>
                    </div>
                </div>
                <br/><br/>
                <div style={{fontWeight:"bold",color:"#5F5F5F"}} >
                    <span >Or Contact us At</span> <br /><br/>
                    <p >
                    <img style={{width:"2%",marginRight:"1%"}} src={Phone}></img>34567890<br /><br/>
                        <img style={{ marginRight: "1%" }} src={Email}></img>user@dimain.com
                   </p>
                </div>
          </div>
        );
    }
}

export default Help;