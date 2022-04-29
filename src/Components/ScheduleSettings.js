import React from 'react';
import './scheduleSettings.css';

export default function ScheduleSettings(){
    return(
        <div className="schedule-settings">
            <div className="schedule">
                <div className="cur-schedule">
                    <h3>Current Schedule</h3>
                    <table className="schedule-table">
                        <tr>
                            <td></td>
                            <td className="bold">Morning</td>
                            <td className="bold">Afternoon</td>
                            <td className="bold">Evening</td>
                        </tr>
                        <tr>
                            <td className="bold left">Monday</td>
                            <td>10:00 AM - 11:30 AM</td>
                            <td>02:00 PM - 4:30 PM</td>
                            <td>06:30 PM - 09:00 PM</td>
                        </tr>
                        <tr>
                            <td className="bold left">Tuesday</td>
                            <td>10:00 AM - 11:30 AM</td>
                            <td>02:00 PM - 4:30 PM</td>
                            <td>06:30 PM - 09:00 PM</td>
                        </tr>
                        <tr>
                            <td className="bold left">Wednessday</td>
                            <td>10:00 AM - 11:30 AM</td>
                            <td>02:00 PM - 4:30 PM</td>
                            <td>06:30 PM - 09:00 PM</td>
                        </tr>
                        <tr>
                            <td className="bold left">Thursday</td>
                            <td>10:00 AM - 11:30 AM</td>
                            <td>02:00 PM - 4:30 PM</td>
                            <td>06:30 PM - 09:00 PM</td>
                        </tr>
                        <tr>
                            <td className="bold left">Friday</td>
                            <td>10:00 AM - 11:30 AM</td>
                            <td>02:00 PM - 4:30 PM</td>
                            <td>06:30 PM - 09:00 PM</td>
                        </tr>
                        <tr>
                            <td className="bold left">Saturday</td>
                            <td>10:00 AM - 11:30 AM</td>
                            <td>02:00 PM - 4:30 PM</td>
                            <td>06:30 PM - 09:00 PM</td>
                        </tr>
                        <tr>
                            <td className="bold left">Sunday</td>
                            <td>10:00 AM - 11:30 AM</td>
                            <td>02:00 PM - 4:30 PM</td>
                            <td>06:30 PM - 09:00 PM</td>
                        </tr>
                    </table>
                </div>
                <div className="daily-schedule">
                    <h3>Daily Schedule</h3>
                    <div className="date-range">
                        <label for="start-date">From Date</label>
                        <input id="start-date" type="date"></input>
                        <label for="end-date">To Date</label>
                        <input id="end-date" type="date"></input>
                    </div>
                </div>
            </div>
            <div className="week-schedule"></div>
        </div>
    );
}