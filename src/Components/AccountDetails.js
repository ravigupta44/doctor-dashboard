import './PersonalDetails.css';
import React,{useState, useMemo} from "react";




export default function AccountDetails(){
    const [values, setValues] = useState({
      Branch:"",
      MICR:"",
      BankName:"",
      AccountNo:"",
      IFSC:""
       
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
            <br/>
            <br/>
            <br/>
        <p className="bankk">Account Details Required for receiving Payments from Patients</p>
        <div className="AccountDetailss">
        <form onSubmit={onSubmit}>
            
        <section>
         <p className="detailsLeftAccount">Account No</p>
        <input className="personalLeft" type="text"  onChange={onChange} name="AccountNo" value={values.AccountNo}
        />
        </section>
        <br/>
        <section>
         <p className="detailsLeftAccount">IFSC Code</p>
        <input className="personalLeft" type="text"  onChange={onChange} name="IFSC" value={values.IFSC}
        />
        </section>
        <br/>
        <section>
         <p className="detailsLeftAccount">MICR Code</p>
        <input className="personalLeft" type="text"  onChange={onChange} name="MICR" value={values.MICR}
        />
        </section>
        <br/>
        <section>
         <p className="detailsLeftAccount">Bank Name</p>
        <input className="personalLeft" type="text"  onChange={onChange} name="BankName" value={values.BankName}
        />
        </section>
        <br/>
        <section>
         <p className="detailsLeftAccount">Branch</p>
        <input className="personalLeft" type="text"  onChange={onChange} name=" Branch" value={values.Branch}
        />
        
        </section>
       

        </form>
        </div>
        
        <button className="saveChangess" onClick={showData} >
                Save Changes
            </button>
        </div>
    );
}