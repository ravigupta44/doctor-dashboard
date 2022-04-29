import React from 'react';
import './paymentsettings.css';
import BankIcon from '../Assets/Icons/bank.png';
import {BANKS} from '../shared/accounts';

function PaymentSettings(){

    const account = BANKS.map((b) => {
        return(
            <div className="account">
                <img src={BankIcon} alt="" height="50px"></img>
                <span className="account-details">
                    <p>Account No.: {b.ac_num}</p>
                    <p>IFSC Code: {b.IFSC}</p>
                    <p className="ac-btn">
                        <span className="left">Primary account</span>
                        <span className="right">Remove</span>
                    </p>
                </span>
            </div>
        );
    });

    return(
        <div className="payment-settings">
            <h2>Saved Payment Details</h2>
            <div className="fees">
                <h3>Consultation Fees</h3>
                <div className="con-fee">
                    <span id="amount">Amount: $400</span>
                    <span id="edit-fee">Edit Amount</span>
                </div>
                <div className="con-fee">
                    <span id="amount">Fees Valid for: 14 Days</span>
                    <span id="edit-fee">Edit</span>
                </div>  
            </div>
            <div className="banks">
                <h3>BANK ACCOUNTS</h3>
                {account}
                <div className="add-btn">Add Account</div>
            </div>
        </div>
    );
}

export default PaymentSettings;