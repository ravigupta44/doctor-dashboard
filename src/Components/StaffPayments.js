import React, {Component} from 'react';
import {PAYMENTS} from '../shared/payments';

export default class StaffPayments extends Component{
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
                <div className="filter">
                    <div className="filter-option">
                        <label for="year">Year</label>
                        <select id="year" value={this.state.selectdYear} onChange={this.changeYear}>
                            <option value="0">All</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>
                    <div className="filter-option">
                        <label for="month">Month</label>
                        <select id="month" value={this.state.selectedMonth} onChange={this.changeMonth}>
                            <option value="12">All</option>
                            <option value="00">Jan</option>
                            <option value="01">Feb</option>
                            <option value="02">Mar</option>
                            <option value="03">Apr</option>
                            <option value="04">May</option>
                            <option value="05">Jun</option>
                            <option value="06">Jul</option>
                            <option value="07">Aug</option>
                            <option value="08">Sep</option>
                            <option value="09">Oct</option>
                            <option value="10">Nov</option>
                            <option value="11">Dec</option>
                        </select>
                    </div>
                </div>
                <div className="staff-pay">PAY A STAFF</div>
                <div className="priscription-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Staff Name</th>
                                <th>Amount</th>
                                <th>Time</th>
                                <th>Payment Method</th>
                                <th>Remarks</th>
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