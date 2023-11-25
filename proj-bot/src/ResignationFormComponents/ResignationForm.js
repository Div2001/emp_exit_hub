import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ResignationForm = () => {
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [employee, setEmployee] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  const employeeData = {
    // Extract user data from the form fields
    lastWorkingDay: e.target.lastWorkingDay.value,
    noticePeriod: e.target['notice-period'].value === 'Yes',
    currentManager: e.target.name.value,
    resignationReason: e.target.reason.value,
    empId:employee.empid
  };

  try {
    // Send a POST request to the server
    const response = await fetch('http://localhost:8081/resignation-api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });

    if (response.ok) {
      // User data was successfully saved
      setSubmitted(true);
    } else {
      // Handle error response from the server
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
  };

  const fetchData = async () => {
      const response = await axios.get(`http://localhost:8082/employee-api/employees/1`);
      setEmployee(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {submitted ? (
        // <p>Resignation submitted successfully!</p>
        navigate("/exit-survey")
      ) : (
      <div class="testbox">
      <form onSubmit={handleSubmit} className='form1'>
        <div class="banner">
          <h1>Resignation Form</h1>
        </div>
        <br/>
        <div>
        <p class="top-info">Check out your details before filling the form <span class="required">*</span></p>
        </div>
        <br/>

        <div class="container1">
        <div class="image1">
            <img src="img/testimonials/01.jpg" alt="Employee Image" width="200"/>
        </div>
        <div class="details1">
            <div class="item">
                <p><b>Employee Id : </b> {employee.empid}</p>
            </div>
            <div class="item">
                <p><b>Full Name : </b> {employee.name}</p>
            </div>
            <div class="item">
                <p><b>Gender : </b> {employee.gender}</p>
            </div>
            <div class="item">
                <p><b>Designation : </b> {employee.dept}</p>
            </div>
            <div class="item">
                <p><b>Joining Date : </b> {employee.joindate}</p>
            </div>
            <div class="item">
                <p><b>DOB : </b> {employee.dob}</p>
            </div>
            <div class="item">
                <p><b>Nationality </b> {employee.nationality}</p>
            </div>
    </div>
   </div>
   <br/>
        <div class="item">
          <p><b>Current Manager</b><span class="required">*</span> <b> : </b>
          
          </p>
          <input type="text" name="name"  className= "input2" required/>
          
        </div>
          
          <div class="item">
            <p><b>Resignation reason</b><span class="required">*</span><b> : </b></p>
            <textarea id="reason" name="reason" required></textarea>
          </div>

          <br/>

          <div>
            <div for="lastWorkingDay"> <b>Select Last Working Day </b>  <span class="required">*</span> <b> : </b>
            <input type="date" id="lastWorkingDay" name="lastWorkingDay" required></input>
            </div> 
          </div>

          <br/><br/>
        

        <div class="question">
          <p><b>Do you agree to work on given notice period?</b><span class="required">*</span></p>
          <div class="question-answer">
          <label><input type="radio" value="Yes" name="notice-period" required/> <span>Yes</span></label>
          <label><input type="radio" value="No" name="notice-period" required/> <span>No</span></label>

          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="item2">
            <input type="checkbox" id="acceptTerms" name="acceptTerms" required/>
            <label for="acceptTerms">I understand and agree to the 
            <a href="terms_and_conditions.html" target="_blank"> Terms and Conditions </a>
             including the
            <a href="Employee_Agreement.html" target="_blank"> Employee Agreement </a> and 
            <a href="Privacy_policy.html" target="_blank"> Privacy Policy</a></label>
        </div>
        <br/>
        <div class="btn-block">
          <button className="button3" type="submit" href="/">Apply</button>
        </div>
        <br/>
        <br/>
        
      </form>
    </div>
      )}
    </div>
  );
};
