import React, {Component} from 'react';
import './settings.css';
import AccountSettings from './AccountSettings';
import PaymentSettings from './PaymentSettings';
import ScheduleSettings from './ScheduleSettings';
import ActivityStatus from './ActivityStatus';
import Notifications from './Notifications';
import Reschedule from './rescheduling';

class Settings extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeButton:"1",
            buttons:[
                {
                    id:"1",
                    name:"Account Settings"
                },
                {
                    id:"2",
                    name:"Payment Settings"
                },
                {
                    id:"3",
                    name:"Schedule Settings"
                },
                {
                    id:"4",
                    name:"Activity Status"
                },
                {
                    id:"5",
                    name:"Notifications"
                },
                {
                    id:"6",
                    name:"Reschedule or Cancellation"
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
                        <div id={btn.id} className="settings-nav-btn active">
                            <p>{btn.name}</p>
                        </div>
                );
            }
            else{
                return(
                        <div id={btn.id} onClick={()=>this.changeButton(btn.id)} className="settings-nav-btn">
                            <p>{btn.name}</p>
                        </div>
                );
            }
        });

        /*const navbar = this.state.buttons.map((button) => {
            
                return(
                        <div id={button.id} onClick={this.changeButton} className="settings-nav-btn">
                            <p>{button.name}</p>
                        </div>
                );
            
        });*/

        return(
            <div>
                <h1 className="settings">Settings</h1>
                <div className="settings-navbar">
                    {navbar}
                </div>
                <div>
                    {this.state.activeButton == 1 && <AccountSettings/>}
                    {this.state.activeButton == 2 && <PaymentSettings/>}
                    {this.state.activeButton == 3 && <ScheduleSettings/>}
                    {this.state.activeButton == 4 && <ActivityStatus/>}
                    {this.state.activeButton == 5 && <Notifications/>}
                    {this.state.activeButton == 6 && <Reschedule/>}
                </div>
            </div>
        );
    }
}

export default Settings;