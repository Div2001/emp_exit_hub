import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../dashboardComponents/components/pages/Home';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token,setToken] = useState('');
  const [errorMessage1, setError1Message] = useState('');
  const [isnotLoggedIn, setIsnotLoggedIn] = useState(false);
  const [errorMessage2, setError2Message] = useState('');
  const [isError, setIsError] = useState(false);
  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    // Check authorization when the component mounts
    if (token) {
      checkAuthorization(token);
    }
  }, [token]);
//   const history = useHistory();


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8084/auth/generateToken', {
        username: username,
        password: password,
      });

      const receivedToken = response.data;
      setToken(receivedToken);
    } catch (error) {
      setIsnotLoggedIn(true)
      setError1Message("Invalid Credentials. Try again");
      console.error('Error during login:', error);
    }
  };
  const checkAuthorization = async (token) => {
    try {
      // Send the token to the server for validation
      const response = await axios.get('http://localhost:8084/auth/user/adminProfile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // If the server responds with a success status, the token is valid
      // You can adjust this based on your server's response for token validation
      if (response.status === 200) {
        // Navigate to the user profile page
        navigate("/dashboard");
        
      } else {
        setIsError(true);
        setError2Message("Invalid Credentials.Try again");
        console.error('Unauthorized access');
      }
    } catch (error) {
      setIsError(true);
      setError2Message("Invalid Credentials.Try again");
      console.error('Error during authorization:', error);
    }
  };

  // const handleLogin = () => {
  //   // Add your login logic here
  //   // For simplicity, we'll just consider the login successful if both fields are filled
  //   if (username && password) {
  //     navigate("/dashboard");
  //       }
  //       else{
  //           alert("please verify credentials")
  //       }
   
  // };

  return (
    <div style={{ textAlign: 'center', padding: '50px'}}>
      <div style={{ width: '300px', margin: '0 auto', background: '#f2eaf9', padding: '10px 20px 50px 20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Login</h2>
        <br/>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
        <button onClick={handleLogin} 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: 'none', 
                  background: '#5a287d', 
                  color: '#fff', 
                  borderRadius: '5px', 
                  cursor: 'pointer' }}>
                    Login
        </button>
      </div>
      {isnotLoggedIn && <p style={{color:"red"}}>{errorMessage1}</p>}
      {isError && <p style={{color:"red"}}>{errorMessage2}</p>}
    </div>
  );
};

