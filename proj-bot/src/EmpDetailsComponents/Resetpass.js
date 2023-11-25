
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resetpass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [employee, setEmployee] = useState([]);
  const [errorMessage1, setError1Message] = useState('');
  const [errorMessage2, setError2Message] = useState('');
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/employees/1');
      setEmployee(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword.trim() === '') {
      setError1Message('Password cannot be empty');
    }
    else if (newPassword !== employee.password) {
      setError2Message('Password does not match');
      setError1Message('');
    }
    if (newPassword === employee.password) {
      try {
        await axios.put(`http://localhost:3000/employees/${employee.id}`, employee);
      } catch (error) {
        console.error('Error updating employee data:', error);
      }
      setNewPassword('');
      setError1Message('');
      setError2Message('');
      alert('password updated !!');

    }
        
  };
  const changeFormData = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  return (
    <div className="reset-password">
      <h2 style={{fontSize:'2.5em', marginBottom:'20px'}}>Reset Password</h2>
      <form>
          <div className="row g-3 align-items-center" style={{marginBottom:'15px'}}>
              <div className="col-auto">
                  <label className="col-form-label" style={{fontSize:'1.5em'}}>New Password</label>
              </div>
              <div className="col-auto">
                  <input type="password" 
                        name='password' 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)} 
                        className="form-control form-control-lg" 
                        aria-describedby="passwordHelpInline" required />
              </div>
              <div className="col-auto">
                  <span id="passwordHelpInline" className="form-text" style={{fontSize:'1em'}}>
                      Must be 8-20 characters long.
                  </span>
              </div>
          </div>
          {errorMessage1 && <p style={{color:'red'}} className="error-message">{errorMessage1}</p>}
          <div className="row g-3 align-items-center" style={{marginBottom:'15px'}}>
              <div className="col-auto">
                  <label className="col-form-label" style={{fontSize:'1.5em'}}>Confirm New Password</label>
              </div>
              <div className="col-auto">
                  <input type="password" 
                        name='password' 
                        value={employee.password} 
                        onChange={changeFormData} 
                        className="form-control form-control-lg" 
                        aria-describedby="passwordHelpInline" required />
              </div>
              <div className="col-auto">
                  <span id="passwordHelpInline" className="form-text" style={{fontSize:'1em'}}>
                      Must be 8-20 characters long.
                  </span>
              </div>
          </div>
          {errorMessage2 && <p style={{color:'red'}} className="error-message">{errorMessage2}</p>}
          <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:'#5a287d',color:'white',marginBottom:'5px',marginTop:'5px',fontSize:'1.5em'}} onClick={handleResetPassword}>
          Reset Password
        </button>
          </form>
      {/* <form>
        <label>New Password:</label>
        <input
          type="text"
          name="password"
          value={employee.password}
          onChange={changeFormData}
        />
        <button type="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </form> */}
    </div>
  );
};

export default Resetpass;
