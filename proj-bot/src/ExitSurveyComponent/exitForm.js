import React, { useState } from 'react';
import { Container, Typography, Box, Checkbox, TextField, Button, FormControl, FormControlLabel, Radio, RadioGroup, FormGroup, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';

const theme = createTheme({
    palette: {
      primary: {
        main: '#5a287d', // Customize the primary color
      },
    },
    overrides: {
      MuiRadio: {
        colorPrimary: {
          '&.Mui-checked': {
            color: '#5a287d', // Customize the checked radio color
          },
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          '&.Mui-checked': {
            color: '#5a287d', // Customize the checked checkbox color
          },
        },
      },
      MuiTextField: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused': {
              borderColor: '#5a287d', // Customize the focused outline color
            },
          },
        },
      },
    },
  });

const ExitSurvey = () => {
  const [empId, setEmpId] = useState('');
  const [leaveReasons, setLeaveReasons] = useState([]);
  const [likes, setLikes] = useState('');
  const [dislikes, setDislikes] = useState('');
  const [compensation, setCompensation] = useState(''); // 'yes' or 'no'
  const [valued, setValued] = useState(''); // 'yes' or 'no'
  const [fairness, setFairness] = useState(''); // 'yes' or 'no'
  const [feedback, setFeedback] = useState('');

  // const handleLeaveReasonsChange = (event) => {
  //   const value = event.target.value;
  //   setLeaveReasons([...leaveReasons, value]);
  // };

  const handleLeaveReasonsChange = (event) => {
    const value = event.target.value;
    const label = event.target.name; // Get the label from the checkbox's 'name' attribute
    if (event.target.checked) {
      // If the checkbox is checked, add the label to the array
      setLeaveReasons([...leaveReasons, label]);
    } else {
      // If the checkbox is unchecked, remove the label from the array
      setLeaveReasons(leaveReasons.filter((reason) => reason !== label));
    }
  };

  const handleSubmit = () => {
    // Handle form submission and send data to your backend using mongodb
    const surveyData = {
      empId, // Replace with the actual employee ID
      leaveReason: leaveReasons,
      likes,
      dislikes,
      compensation,
      valued,
      fairness,
      feedback,
    };
  
    axios.post('http://localhost:8083/exit-api/create', surveyData)
      .then((response) => {
        alert('Survey submitted successfully:', response.data);
        // Optionally, you can reset the form fields here
      })
      .catch((error) => {
        alert('Error submitting survey:', error);
      });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" style={{ color: '#5a287d' }}>
        <br />
        <h2> Exit Survey</h2>
      </Typography>
      <br />
      <Box mt={2}>
        <Typography variant="h6">Enter employee id</Typography>
        <TextField
          multiline
          fullWidth
          variant="outlined"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />
      </Box>
      <br />
      <Box mt={2}>
          <Typography variant="h6">Why do you want to leave the company?</Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Better job opportunity"
              name="Better job opportunity"
              onChange={handleLeaveReasonsChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Illness"
              name="Illness"
              onChange={handleLeaveReasonsChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Salary"
              name="Salary"
              onChange={handleLeaveReasonsChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Moving"
              name="Moving"
              onChange={handleLeaveReasonsChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Safety"
              name="Safety"
              onChange={handleLeaveReasonsChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Politics"
              name="Politics"
              onChange={handleLeaveReasonsChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Retirement"
              name="Retirement"
              onChange={handleLeaveReasonsChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Other"
              name="Other"
              onChange={handleLeaveReasonsChange}
            />
            {/* Add more checkbox options as needed */}
          </FormGroup>
        </Box>
      <br />
      <Box mt={2}>
        <Typography variant="h6">What do you like about the company?</Typography>
        <TextField
          multiline
          fullWidth
          variant="outlined"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
        />
      </Box>
      <br />
      <Box mt={2}>
        <Typography variant="h6">What do you dislike about the company?</Typography>
        <TextField
          multiline
          fullWidth
          variant="outlined"
          value={dislikes}
          onChange={(e) => setDislikes(e.target.value)}
        />
      </Box>
      <br />
      <Box mt={2}>
          <Typography variant="h6">Were you compensated well for the work you did?</Typography>
          <FormControl component="fieldset">
            <RadioGroup name="compensation" value={compensation} onChange={(e) => setCompensation(e.target.value)}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
      <br />
      <Box mt={2}>
          <Typography variant="h6">Do you feel valued working here?</Typography>
          <FormControl component="fieldset">
            <RadioGroup name="valued" value={valued} onChange={(e) => setValued(e.target.value)}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
      <br />
      {/* <Box mt={2}>
        <Typography variant="h6">Were you treated fairly by colleagues and supervisors?</Typography>
        <Checkbox value="yes" onChange={(e) => setFairness(e.target.value)} /> Yes
        <Checkbox value="no" onChange={(e) => setFairness(e.target.value)} /> No
      </Box> */}

      <Box mt={2}>
          <Typography variant="h6">Were you treated fairly by colleagues and supervisors?</Typography>
          <FormControl component="fieldset">
            <RadioGroup name="fairness" value={fairness} onChange={(e) => setFairness(e.target.value)}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
      <br />
      <Box mt={2}>
        <Typography variant="h6">Any suggestions and feedback?</Typography>
        <TextField
          multiline
          fullWidth
          variant="outlined"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </Box>
      <br />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

// export default ExitSurvey;

const exitForm = () => {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor:'#f2eaf9' }}>
        <Paper elevation={5}> {/* Paper component with elevation */}
            <ExitSurvey />
        </Paper>
        </div>
      </ThemeProvider>
    );
  };
  
  export default exitForm;