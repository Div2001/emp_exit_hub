import React from "react";

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
           Create Innovatively, Empowering Your Financial Freedom.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
                  {" "}
                  <i className='fa fa-credit-card-alt'></i>
                  <div className="service-desc">
                    <h3>Oneservice</h3>
                    <p>Our oneservice could be ideal if you’ve multiple employees who make business purchases. To apply, you need an annual turnover. It’s available to Limited companies, Limited liability partnerships, and Charitable incorporated organisations.</p>
                  </div>
          </div>
       
          <div className="col-md-4">
                  {" "}
                  <i className='fa fa-download'></i>
                  <div className="service-desc">
                    <h3>Mobile services</h3>
                    <p>Unicorn offers online and mobile banking platforms, pay bills, transfer money, and more conveniently. Unicorn offers online and mobile service platforms, allowing customers to manage their accounts, pay bills, transfer money, and more conveniently.</p>
                  </div>
          </div>
          <div className="col-md-4">
                  {" "}
                  <i className='fa fa-language'></i>
                  <div className="service-desc">
                    <h3>Multilingual Support</h3>
                    <p> Unicorn, provides customer support in multiple languages to assist customers who are more comfortable communicating in languages other than English. This can include phone support, online chat, and in-branch assistance whenever required.</p>
                  </div>
          </div>
        </div> 
      </div>
    </div>
  );
};
