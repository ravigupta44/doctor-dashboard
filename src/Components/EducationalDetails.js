import React,{useState, useMemo} from "react";
import './PersonalDetails.css';

export default function EducationalDetails(){

    const [values, setValues] = useState({
      SchoolName:"",
      Board:"",
      CGPA:"",
      year:"",
      certificate:"",

      CollegeNameG:"",
      UniversityNameG:"",
      yearG:"",
      certificateG:"",
      CGPAG:"",

      CollegeNameSpec:"",
      UniversityNameSpec:"",
      yearSpec:"",
      certificateSpec:'',
      CGPASpec:"",


      SchoolNameSec:"",
      BoardSec:"",
      yearSec:"",
      CertificateSec:"",
      CGPASec:"",


      CollegePost:"",
      UniPost:"",
      CGPAPost:"",
      CertificatePost:"",
      yearPost:""

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

               <p className="column1Ed">
                   <u>Secondary education</u></p>
           
        <section className="left" >
         <p className="detailsLeft">School Name</p>
        <input className="personalLeft"  type="text" onChange={onChange} name="SchoolName" value={values.SchoolName}
        />
        </section>

        <section className="left">
         <p className="detailsLeft">Board</p>
        <input className="personalLeft" type="text" onChange={onChange} name="Board" value={values.Board} />
        </section>

        <section className="leftsmall">
         <p className="detailsLeft">Passing Year</p>
        <input className="personalLeftEd" type="text" onChange={onChange} name="year" value={values.year}/>   
        <br/>
        <br/>
        <p className="detailsRight">Upload Certificate</p>
        <input type="file" name="certificate" onChange={onChange} value={values.certificate}/>
         </section>
         
            <section className="smallerblockk">
            <p className="detailsRight">Percentage/CGPA</p>
            <input  type="text" onChange={onChange} name="CGPA" value={values.CGPA}/>
            </section>

            <br/>
            <br/>
            <br/>
            <br/>

         <p className="column1Ed">
                   <u>Graduation</u></p>
        <section className="left" >
         <p className="detailsLeft">College Name</p>
        <input className="personalLeft"  type="text" onChange={onChange} name="CollegeNameG" value={values.CollegeNameG}
        />
        </section>

        <section className="left">
         <p className="detailsLeft">University Name</p>
        <input className="personalLeft" type="text" onChange={onChange} name="UniversityNameG" value={values.UniversityNameG}
        />
        </section>

        <section className="leftsmall">
         <p className="detailsLeft">Passing Year</p>
        <input className="personalLeftEd" type="text" onChange={onChange} name="yearG" value={values.yearG}
        />   
        <br/>
        <br/>     
        <p className="detailsRight">Upload Certificate</p>
        <input type="file" name="certificateG" onChange={onChange} value={values.certificateG}/>
         </section>
         
            <section className="smallerblockk">
            <p className="detailsRight">Percentage/CGPA</p>
            <input  type="text" onChange={onChange} name="CGPAG" value={values.CGPAG}/>
            </section>
        <br/>
        <br/>
        <br/>
        <br/>
            <p className="column1Ed">
                   <u>Specialization</u></p>
           
        <section className="left" >
         <p className="detailsLeft">College Name</p>
        <input className="personalLeft"  type="text" onChange={onChange} name="CollegeNameSpec" value={values.CollegeNameSpec}
        />
        </section>
        <section className="left">
         <p className="detailsLeft">University Name</p>
        <input className="personalLeft" type="text" onChange={onChange} name="UniversityNameSpec" value={values.UniversityNameSpec}
        />
        </section>
        <section className="leftsmall">
         <p className="detailsLeft">Passing Year</p>
        <input className="personalLeftEd" type="text" onChange={onChange} name="yearSpec" value={values.yearSpec}
        />   
        <br/>
        <br/>
        <p className="detailsRight">Upload Certificate</p>
        <input type="file" name="certificateSpec" onChange={onChange} value={values.certificateSpec}/>
         </section>
         
            <section className="smallerblockk">

            <p className="detailsRight">Percentage/CGPA</p>
            <input  type="text" onChange={onChange} name="CGPASpec" value={values.CGPASpec}/>
            </section> 
     
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>



           <div class="column">
        <div className="Right">
        <p className="column2Ed">
                   <u>Senior Secondary Education</u></p>
        <section className="Right11">
            <p className="detailsRight">School Name</p>
            <input className="personalRight1" type="text" onChange={onChange} name="SchoolNameSec" value={values.SchoolNameSec}/>
            
        </section>
        
        <section className="Right11">
             <p className="detailsRight">Board
            </p>
            <input className="personalRight1" type="text" onChange={onChange} name="BoardSec" value={values.BoardSec}/>
            
        </section>
        <section className="Right1">
        <p className="detailsRight">Passing year
            </p>
            <input className="personalRight" type="number" onChange={onChange} name="yearSec" value={values.yearSec}/>
          
        </section>
        
        <section className="Right11">
             <p className="detailsRight">Upload Certificate
            </p>
            <input  type="file" name="CertificateSec" onChange={onChange} value={values.CertificateSec}/>
            
        </section>
        <br/>
        <br/>
        </div>

        <div class="column">
        <div className="rightsSmallEd">
        <p className="detailsRight">Percentage/CGPA
            </p>
            <input className="personalRight" type="text" onChange={onChange} name="CGPASec" value={values.CGPASec}/>
        </div> 
           </div>

        <br/>
        <br/>
        <br/>
        <br/>



           <div className="Right2">
        <p className="column2Ed">
                   <u>Post Graduation</u></p>
        <section className="Right11">
            <p className="detailsRight">College Name</p>
            <input className="personalRight1" type="text" onChange={onChange} name="CollegePost" value={values.CollegePost}/>
            
        </section>
        
        <section className="Right11">
             <p className="detailsRight">University Name</p>
            <input className="personalRight1" type="text" onChange={onChange} name="UniPost" value={values.UniPost}/>
            
        </section>
        <section className="Right1">
        <p className="detailsRight">Passing year
            </p>
            <input className="personalRight" type="number" onChange={onChange} name="yearPost" value={values.yearPost}/>
          
        </section>
        
        <section className="Right11">
             <p className="detailsRight">Upload Certificate
            </p>
            <input  type="file" name="CertificatePost" onChange={onChange} value={values.CertificatePost}/>
            
        </section>
        <br/>
        <br/>
        </div>

        <div class="column">
       
        <div className="rightsSmallEd2">
        <p className="detailsRight">Percentage/CGPA
            </p>
            <input className="personalRight" type="text" onChange={onChange} name="CGPAPost" value={values.CGPAPost}/>
        </div> 
           </div>
           </div>


            <button className="saveChangesEd" onClick={showData}>
                Save Changes
            </button>
            
            </form>
        </div>
        </div>

    );
}