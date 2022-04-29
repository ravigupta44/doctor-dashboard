import React from 'react';
import './accountsettings.css';

function AccountSettings(){
    return(
        <div>
            <div className="edit-profile">Edit Profile</div>
            <div className="change-pass">Change Password</div>
            <form id="change-password-form">
                <div className="input">
                    <label>Current Password</label>
                    <input type="password" name=""/>
                </div>
                <div className="input">
                    <label>New Password</label>
                    <input type="password" name=""/>
                </div>
                <div className="input">
                    <label>Confirm Password</label>
                    <input type="password" name=""/>
                </div>
                <input type="submit" value="Change Password"/>
            </form>
        </div>
    );
}

export default AccountSettings;