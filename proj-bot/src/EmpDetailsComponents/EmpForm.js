
import React, { useState } from 'react';
import axios from 'axios';

const EmpForm = ({ employee, onCancel, onSave, id }) => {
  const [editedEmployee, setEditedEmployee] = useState(employee);
  

  // useEffect(() => {
  //   setEditedEmployee(...employee);
  // }, []);

  const changeFormData = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({
      ...editedEmployee,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`http://localhost:8082/employee-api/employees/${id}`, editedEmployee);
      onSave();
      alert("details updated Successfully")
    } catch (error) {
      console.error('Error updating employee data:', error);
    }
  };

  return (
    <div>
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control form-control-lg" 
                            value={editedEmployee.name} 
                            type="text" 
                            name="name" 
                            placeholder="Enter Name"
                            onChange={changeFormData} required/>
                </div>

                <div className="form-group">
                    <label>Employee ID:</label>
                    <input className="form-control form-control-lg" 
                            value={editedEmployee.empid} 
                            type="text" 
                            name="empid" 
                             readonly
                             style={{pointerEvents:'none'}}/>
                </div>

                <div className="form-group">
                    <label>Date of Joining:</label>
                    <input className="form-control form-control-lg" 
                            value={editedEmployee.joindate} 
                            type="text" 
                            name="joindate" 
                             readonly
                             style={{pointerEvents:'none'}}/>
                </div>

                <div className="form-group">
                    <label>Department:</label>
                    <input className="form-control form-control-lg" 
                            value={editedEmployee.dept} 
                            type="text" 
                            name="dept" 
                             readonly
                             style={{pointerEvents:'none'}}/>
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <select className="form-control form-control-lg" name="gender"
                        value={editedEmployee.gender}
                        onChange={changeFormData}
                    >
                        <option value={'Male'}>Male</option>
                        <option value={'Female'}>Female</option>
                        <option value={'Others'}>Others</option>

                    </select>

                </div>

                <div className="form-group">
                    <label>DOB:</label>
                    <input className="form-control form-control-lg"
                        value={editedEmployee.dob}
                        onChange={changeFormData}
                        type="text" 
                        name="dob" 
                        placeholder="dd/mm/yyyy" />
                </div>

                <div className="form-group">
                    <label>Nationality:</label>
                    <input className="form-control form-control-lg" 
                            value={editedEmployee.nationality} 
                            type="text" 
                            name="nationality" 
                            placeholder="Nationality"
                             readonly
                             style={{pointerEvents:'none'}}/>
                </div>

                <div className="form-group" style={{marginBottom:'10px'}} >
                    <label>Marital Status:</label>
                    <input className="form-control form-control-lg" 
                            value={editedEmployee.maritalstatus} 
                            type="text" 
                            name="maritalstatus" 
                            placeholder="Single/Married"
                            onChange={changeFormData} />
                </div>
                
                <button className="btn btn-primary btn-lg float-end"
                        style={{backgroundColor:'#5a287d',color:'white',marginLeft:'10px',marginRight:'10px',fontSize:'1.5em'}}

                    onClick={handleSaveClick}>Send</button>

                <button className="btn btn-danger btn-lg float-end" style={{fontSize:'1.5em'}}
                    onClick={onCancel}>Cancel</button>

            </form>

        </div>
  );
};

export default EmpForm;
