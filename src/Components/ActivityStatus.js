import React from "react";
import './activitystatus.css';

function ActivityStatus(){
    return(
        <div>
            <h1>Recent Activity Status</h1>
            <div className="statusbox">
                <br/>
                <span className="textt">Recent Active Status</span>
                <input type="checkbox" id="switch"  class="checkbox" />
                <label for="switch" class="toggle"> </label>
            </div>
            <p className="texxt">Allow patients to see if you were recently active within last 24 hours on JEEVITIV. </p>
            <p className="teexxt">If you have turned this off, they will not be able to see your recent active status. </p>                  
        </div>
    )
}
export default ActivityStatus;