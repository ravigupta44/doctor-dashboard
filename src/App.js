import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Appointments from "./Components/Appointments";
import PatientData from "./Components/PatientData";
import Settings from "./Components/Settings";
import Help from "./Components/Help";
import PatientOtp from "./Components/patientOTP";
import PatientEnterOtp from "./Components/patientEnterOtp";
import previousConsultation from "./Components/previousConsultation";
import Billing from "./Components/Billing";
import './App.css';
import ProfileUpdate from "./Components/ProfileUpdate";

const App = ( ) =>  {

  return (

    <div className="app">
      <BrowserRouter>
        <Sidebar/>
        <Header/>
        <div className="dashboard_main_container">
          <Switch>
            <Route exact path="/appointment" component={Appointments}></Route>
            <Route exact path="/settings" component={Settings}></Route>
            <Route exact path="/prevconsultations" component={previousConsultation}></Route>
            <Route exact path="/patientdata" component={PatientData}></Route>
            <Route exact path="/patientOtp" component={PatientOtp}></Route>
            <Route exact path="/patientEnterOtp" component={PatientEnterOtp}></Route>
            <Route exact path="/help" component={Help}></Route>
            <Route exact path="/payments" component={Billing}></Route> 
            <Route exact path="/" component={Dashboard}></Route> 
            <Route exact path="/ProfileUpdate" component={ProfileUpdate}></Route> 
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
