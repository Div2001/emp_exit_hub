import React from "react";
import { Navigation } from "./navigation";
import {LoginPage} from "./LoginPage";
import { Footer } from "./footer";

//import "./App.css";
import "./Login.css";



const Login = () => {

  return (
    <div>
      <Navigation />
      <br/>
      <br/>
      <br/>
      <LoginPage />
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>      
    </div>
  );
};

export default Login;
