import './PersonalDetails.css';
import React,{useState, useMemo} from "react";
import countryList from 'react-select-country-list';
import Select from "react-select";



export default function ClinicDetails(){
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }

    const [values, setValues] = useState({
        registrationNo: "",
        clinicName:"",
        email: "",
        address: "",
        state:"",
        phoneNo: "",
        AddressProof:"",
        country:"",
        PIN:""
       

    });


    



    const onChange = (e) => {
        const {value, name} = e.target;
        setValues((state) => ({
            ...state,
            [name]:value
        }));
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
         <p className="detailsLeft">Clinic Name</p>
        <input className="personalLeft"  type="text" onChange={onChange} name="clinicName" value={values.clinicName}
        />
        </section>
        <section className="left">
         <p className="detailsLeft">E-Mail</p>
        <input className="personalLeft" type="email" onChange={onChange} name="email" value={values.email}
        />
        </section>
        
        <section className="left">
         <p className="detailsLeft">Address</p>
        <input className="personalLeftAddress" onChange={onChange} name="address" value={values.address}
          type="address"
        />
        </section>
        <br/>
        <br/>
        </div>



           <div class="column">
        <div className="Right">
        <section className="Right11">
            <p className="detailsRight">Registration No
            </p>
            <input className="personalRight1" type="number" onChange={onChange} name="registrationNo" value={values.registrationNo}/>
            
        </section>
        
        <section className="Right11">
             <p className="detailsRight">Phone No
            </p>
            <input className="personalRight1" type="phone" onChange={onChange} name="phoneNo" value={values.phoneNo}/>
            
        </section>
        <section className="Right1">
        <p className="detailsRight">PIN Code
            </p>
            <input className="personalRight" type="number" onChange={onChange} name="PIN" value={values.PIN}/>
          
        </section>
        <section className="Right11">
             <p className="detailsRight">Country
            </p>
            <Select className="personalRight1" options={options} name="country" value={values.country} onChange={changeHandler} />
            
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
       
        <div className="statee">
        <p className="detailsRight">State
            </p>
            <input className="personalRight" type="text" onChange={onChange} name="state" value={values.state}/>
        </div> 
           </div>
           </div>


            <button className="saveChangess" onClick={showData}>
                Save Changes
            </button>
            
            </form>
        </div>
       
        </div>
    );
}