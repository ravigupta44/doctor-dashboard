import React from "react";
import './rescheduling.css';

function Reschedule(){
    return(
        <div>
        <h1 className="titleee">Patient Rescheduling Settings</h1>
        <div className="box3">
                <br/>
                <span className="texttt">Allow Cancellation</span>
                <input type="checkbox" id="switch"  class="checkbox" />
                <label for="switch" class="toggle"> </label>
                <br/>
                <br/>
                <text>Allow patients to cancel the appointments.</text>
        </div>
        <br/>
        <br/>
        <div className="box3">
                <br/>
                <span className="texttt">Allow Reschedule</span>
                <input type="checkbox" id="switch"  class="checkbox" />
                <label for="switch" class="toggle"> </label>
                <br/>
                <br/>
                <text>Allow patients to reschedule the appointments.</text>
        </div>

        
       
        </div>
    )

}
export default Reschedule;