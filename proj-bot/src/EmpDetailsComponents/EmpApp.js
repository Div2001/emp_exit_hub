import logo from './Natwest_logo.svg';
import icon from './default_img.jpeg'
import EmpInfo from './EmpInfo';
import { useState } from 'react';
import ResetPassword from './Resetpass';
import Notifications from './Notifications';
import { Link } from 'react-router-dom';


function EmpApp() {

  const [details,setDetails] = useState(true);
  const [pass,setPass] = useState(false);
  const [notify,setNotify] = useState(false);

  const handleDetailsClick = () =>{
    setDetails(true);
    setPass(false);
    setNotify(false);

  }

  const handleResetClick = () =>{
    setDetails(false);
    setPass(true);
    setNotify(false);
  }
  const handleNotifyClick = ()=> {
    setDetails(false);
    setPass(false);
    setNotify(true);

  }

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />

      <div>
        <div className="row">
          <div className="col-3 p-3 mb-2" style={{ backgroundColor: '#5a287d',height:'675px' , textAlign: 'center' }}>
            <img src={icon} alt='' style={{ borderRadius: '50%', marginBottom: '20px' }} />
            <div className="list-group list-group-flush account-settings-links" >
              <button type='submit' className="btn btn-lg" style={{fontSize:'15px', backgroundColor: '#5a287d', color: 'white', marginBottom: '10px', marginTop: '5px' }} onClick={handleDetailsClick}>Details</button>
              <button type='submit' className="btn btn-lg" style={{fontSize:'15px', backgroundColor: '#5a287d', color: 'white', marginBottom: '5px' }} onClick={handleResetClick}>Change Password</button>
              <button type='submit' className="btn btn-lg" style={{fontSize:'15px', backgroundColor: '#5a287d', color: 'white', marginBottom: '5px' }} onClick={handleNotifyClick}>Notifications</button>
              <button type='submit' className="btn btn-lg" style={{fontSize:'15px', backgroundColor: '#5a287d', color: 'white', marginBottom: '5px' }}><Link to="/resignation-form" style={{ color: 'white' }}>Apply for Resignation</Link></button>

            </div>
          </div>

          <div className="col-sm-9 p-3">
            {details && <EmpInfo id={2}></EmpInfo>}
            {pass && <ResetPassword></ResetPassword>}
            {notify && <Notifications></Notifications>}
          </div>
        </div>
      </div>

    </>
  );
}

export default EmpApp;
