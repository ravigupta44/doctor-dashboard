import React, {Component} from 'react';
import JeevitivPayments from './JeevitivPayment';
import StaffPayments from './StaffPayments';
import PatientPayments from './PatientPayment';
import './payments.css';

class Billing extends Component{

    constructor(props){

        super(props);

        this.state = {
            selectedType : "0",
        };
    }

    changeType = (typ) => {
        this.setState(
            {
                selectedType:typ.target.value
            }
        );
        console.log(this.state.selectedType);
    };

    render(){
        return(
            <div>
                <h1 className="prescription">Payments</h1>
                <div className="payment-filter">
                    <select id="paytype" value={this.state.selectedType} onChange={this.changeType}>
                        <option value="0">Payments to Jeevitiv</option>
                        <option value="1">Payments to Staff</option>
                        <option value="2">Payments from Patients</option>
                    </select>
                </div>
                <div>
                    {this.state.selectedType == 0 && <JeevitivPayments/>}
                    {this.state.selectedType == 1 && <StaffPayments/>}
                    {this.state.selectedType == 2 && <PatientPayments/>}
                </div>
            </div>
        );
    }
    
}

export default Billing;