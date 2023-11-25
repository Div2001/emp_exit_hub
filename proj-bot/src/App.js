import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./LandingPagecomponents/LandingPage";
import Login from "./Logincomponents/login";
import Home from "./dashboardComponents/components/pages/Home";
import Documentation from "./DocumentationComponent/Documentation";
import EmpMain from "./EmpDetailsComponents/EmpMain";
import { ResignationForm } from "./ResignationFormComponents/ResignationForm";
import ExitSurveyForm from "./ExitSurveyComponent/exitSurveyForm";

import "./App.css";

const App = () => {

  return (

      
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/dashboard" element={<Home/>}/> 
          <Route path="/documentation" element={<Documentation/>}/>
          <Route path="/services" element={<EmpMain/>}/>
          <Route path="/resignation-form" element={<ResignationForm />} />
          <Route path="/exit-survey" element={<ExitSurveyForm />} />

        </Routes>
      </div>
    </Router>
  
  );
};

export default App;

