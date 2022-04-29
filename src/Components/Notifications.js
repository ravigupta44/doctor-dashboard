import React from "react";
import './notifications.css';

function Notifications(){
    return(
    <div>
        <h1>E-mail notifications</h1>
        <div className="box1">
            <br/>
            <span className="notifis">New Appointments</span>
            <input type="checkbox" id="switch"  class="checkbox" />
                <label for="switch" class="toggle"> </label>
            <br/>
            <br/><br/>
            <span className="notifis">Messages</span>
            <input type="checkbox" id="switch"  class="checkbox" />
                <label for="switch" class="toggle"> </label>
            <br/>
            <br/>
            <br/>
            <span className="notifis">Promotions </span>
            <input type="checkbox" id="switch"  class="checkbox" />
                <label for="switch" class="toggle"> </label>

            <br/>
            <br/>
            <text>I want to receive news, updates and offers from jeevitiv</text>
            
           

        </div>
        <h2 className="ttext">Control the email you want to get. You can always unsubscribe from the bottom of any email.</h2>
        <h3 className="tttext">Push Notifications</h3>
        <div className="box2">
            <br/>
            <span className="notifis">New Appointments</span>
            <input type="checkbox" id="switch"  class="checkbox" />
                <label for="switch" class="toggle"> </label>
            <br/>
            <br/><br/>
            <span className="notifis">Messages</span>
            <input type="checkbox" id="switch"  class="checkbox" />
                <label for="switch" class="toggle"> </label>
            <br/>
            <br/>
            <br/>
            <span className="notifis">Promotions </span>
            <input type="checkbox" id="switch"  class="checkbox" />
                <label for="switch" class="toggle"> </label>

            <br/>
            <br/>
            <text>I want to receive news, updates and offers from jeevitiv</text>
            
           

        </div>
        <br/>
        <br/>

    </div>

    )
}

export default Notifications;