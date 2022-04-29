import React,{useState, useMemo} from "react";
import './PersonalDetails.css';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import Select from "react-select";
import countryList from 'react-select-country-list';
 

 
  

export default function PersonalDetails(){
    const [values, setValues] = useState({
        registrationNo: "",
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        gender: "",
        statecouncil: "",
        state:"",
        phoneNo: "",
        IDproof:"",
        AddressProof:"",
        registrationYear:"",
        date:""

    });
    const onChange = (e) => {
        const {value, name} = e.target;
        setValues((state) => ({
            ...state,
            [name]:value
        }));
    }
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }

    const showData = () => {
        console.log('Form: ',values);
    }



    const onSubmit = (e) => {
        e.preventDefault();
    }





    return(
        <div>
        <div className="roww">
        <form onSubmit={onSubmit}>
           <div class="column">
           
        <section className="left" >
         <p className="detailsLeft">IMC Registration No.</p>
        <input className="personalLeft"  type="text" onChange={onChange} name="registrationNo" value={values.registrationNo}
        />
        </section>
        <section className="left">
         <p className="detailsLeft">First Name</p>
        <input className="personalLeft" type="name" onChange={onChange} name="firstname" value={values.firstname}
        />
        </section>
        <section className="left">
         <p className="detailsLeft">Gender</p>
         <select className="personalLeftGender" onChange={onChange}  name="gender" value={values.gender}>
             <option></option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Others">Others</option>
         </select>
        </section>
        <section className="left">
         <p className="detailsLeft">E-Mail</p>
        <input className="personalLeft" type="text" name="email" onChange={onChange} value={values.email}
        />
        </section>
        <section className="left">
         <p className="detailsLeft">Address</p>
        <input className="personalLeftAddress" onChange={onChange} name="address" value={values.address}
          type="address"
        />
        </section>
        <section className="left">
         <p className="detailsLeft">ID Proof</p>
        <input  type="file" onChange={onChange} name="IDproof" value={values.IDproof}/>
        </section>
        <br/>
        <br/>
        </div>



           <div class="column">
        <div className="Right">
        <section className="Right1">
        <p className="detailsRight">Year of Registration
            </p>
            <input className="personalRight" type="number" onChange={onChange} name="registrationYear" value={values.registrationYear}/>
          
        </section>
        <section className="Right11">
            <p className="detailsRight">Last Name
            </p>
            <input className="personalRight1" type="text" onChange={onChange} name="lastname" value={values.lastname}/>
            
        </section>
        <section className="Right11">
            <p className="detailsRight">Date of birth
            </p>
            <DatePickerComponent className="personalRight1" type="date" format="dd-MM-yyyy" placeholder="dd-MM-yyyy" onChange={onChange}
            name="date" value={values.date}
             
            />
            
            
        </section>
        <section className="Right11">
             <p className="detailsRight">Phone No
            </p>
            <input className="personalRight1" type="phone" onChange={onChange} name="phoneNo" value={values.phoneNo}/>
            
        </section>
        <section className="Right1">
        <p className="detailsRight">PIN Code
            </p>
            <input className="personalRight" type="number" onChange={onChange}/>
          
        </section>
        <section className="Right11">
             <p className="detailsRight">Country
            </p>
            <Select className="personalRight1" options={options} value={value} onChange={changeHandler} />
            
        </section>
        <section className="Right11">
             <p className="detailsRight">Address Proof
            </p>
            <input  type="file" name="AddressProof" onChange={onChange} value={values.AddressProof}/>
            
        </section>
        <br/>
        <br/>
        </div>

        <div class="column">
        <div className="extremeRight">
        <p className="detailsRight">State Medical Council
            </p>
            <input className="personalRight" type="text" onChange={onChange} name="statecouncil" value={values.statecouncil}/>
        </div>
        <div className="state">
        <p className="detailsRight">State
            </p>
            <input className="personalRight" type="text" onChange={onChange} name="state" value={values.state}/>
        </div> 
           </div>
           </div>


            <button className="saveChanges" onClick={showData}>
                Save Changes
            </button>
            
            </form>
        </div>
       
        </div>

    );
}