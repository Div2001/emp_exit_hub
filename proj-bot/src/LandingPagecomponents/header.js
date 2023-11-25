import React from "react";
import 'font-awesome/css/font-awesome.min.css';
export const Header = () => {
  return (
    <header id="header">     
    <div className="intro">
      <div className="overlay" style={{marginTop:'0px'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro-text">               
                <h1>
                We Encourage<br/>
                Potential
                  <span></span>
                </h1>
                <p>Your potential comes first. Our programmes give you structured and supported learning with every chance to follow your interests.</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Explore our Page
                </a>{" "}
              </div>
              <div className="col-md-6 intro-text">
              <div class="image-container text-center" style={{alignItems:'center'}} >
                <img src="img/work2.jpg" class="img-responsive" alt="" style={{ height: "300px", width:"500px"}}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
