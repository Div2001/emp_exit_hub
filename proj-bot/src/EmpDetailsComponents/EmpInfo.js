
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmpForm from './EmpForm';

const EmpInfo = ({id}) => {
  const [initialForm, setForm] = useState({ name: '', gender: '', dob: '', nationality: '', maritalstatus: '' })
  const [employee, setEmployee] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/employee-api/employees/${id}`);
      setEmployee(response.data);
      
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const handleEditClick = (value) => {
    setEditing(true);
    setForm(value);
    
  };

  const handleSaveClick = () => {
    setEditing(false);
    fetchData(); // Fetch data again after saving changes
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <div className="emp-info">
      <h2>Employee Information</h2><br/>
      {!editing && (
        <div>
        <table className="table m-3" >
            <tbody>
                {/* {employee.map((employee)=>( */}
                    <>
                    
                    <tr >
                        <th >Name</th>
                        <td>{employee.name}</td>
                    </tr>
                    <tr>
                        <th>Emp ID</th>
                        <td>{employee.empid}</td>
                    </tr>
                    <tr>
                        <th>Date of Joining</th>
                        <td>{employee.joindate}</td>
                    </tr>
                    <tr>
                        <th>Department</th>
                        <td>{employee.dept}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{employee.gender}</td>
                    </tr>
                    <tr>
                        <th>DOB</th>
                        <td>{employee.dob}</td>
                    </tr>
                    <tr>
                        <th>Nationality</th>
                        <td>{employee.nationality}</td>
                    </tr>
                    <tr>
                        <th>Marital Status</th>
                        <td>{employee.maritalstatus}</td>
                    </tr>
                    
                    <br/>
                    <button type='button' className="btn btn-primary btn-lg" style={{backgroundColor:'#5a287d',color:'white',marginBottom:'5px',marginTop:'5px',fontSize:'1em'}} onClick={()=>handleEditClick(employee)}>Edit</button>
                    </>

                {/* ))} */}
            </tbody>
        </table>
    </div>
      )}
      {editing && (
        <EmpForm
          employee={initialForm}
          onCancel={handleCancelEdit}
          onSave={handleSaveClick}
          id={id}
        />
      )}
    </div>
  );
};

export default EmpInfo;
