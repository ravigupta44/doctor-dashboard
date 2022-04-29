import React, {Component} from 'react';
import {PAYMENTS} from '../shared/payments';

export default class JeevitivPayments extends Component{
    constructor(props){

        super(props);

        this.state = {
            selectedMonth:"12",
            selectedYear : "0",
        };
    }

    changeMonth = (month) => {
        this.setState(
            {
                selectedMonth:month.target.value
            }
        );
    };

    changeYear = (year) => {
        this.setState(
            {
                selectedYear:year.target.value
            }
        );
    };

    

    render(){

        if(this.state.selectedMonth=="12" && this.state.selectedYear=="0"){
            var med = PAYMENTS;
        }
        else if(this.state.selectedYear=="0"){
            var med = PAYMENTS.filter((medicine) => 
                medicine.time.getMonth() == this.state.selectedMonth
            );
        }
        else if(this.state.selectedMonth=="12"){
            var med = PAYMENTS.filter((medicine) => 
                medicine.time.getFullYear() == this.state.selectedYear
            );
        }
        else{
            var med = PAYMENTS.filter((medicine) => 
                medicine.time.getFullYear() == this.state.selectedYear
            );
            med = med.filter((medicine) => 
                medicine.time.getMonth() == this.state.selectedMonth
            );
        }

        var count = 0;

        const medicineData = med.map((medicine) => {
            count = count+1;
            return(
                <tr>
                    <td>{medicine.id}</td>
                    <td>{medicine.name}</td>
                    <td>{medicine.amount}</td>
                    <td>{medicine.time.toLocaleDateString()+ " " + medicine.time.toLocaleTimeString()}</td>
                    <td>{medicine.method}</td>
                    <td>{medicine.status}</td>
                </tr>
            );
        });

        return(
            <div>
                <div className="pack-bar">
                    <div className="package">
                        <span className="head">Current Package:</span>
                        <span className="name">Basic</span>
                    </div>
                    <div className="upgrade-btn">UPGRADE PLAN</div>
                </div>
                <div className="priscription-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Time</th>
                                <th>Payment Method</th>
                                <th>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicineData}
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    };
}