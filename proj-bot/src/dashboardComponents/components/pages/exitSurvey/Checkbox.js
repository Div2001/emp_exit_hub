import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Checkbox from 'material-ui/Checkbox';
// import { FormControlLabel, FormGroup } from '@mui/material';
import '../../../App'
import RaisedButton from 'material-ui/RaisedButton';
// import { Box } from '@mui/material'
import { Box, FormControlLabel, Checkbox, FormGroup} from '@mui/material'


class FormReasonForLeaving extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleChange = (value) => () => {
        const { values, handleChange } = this.props;
        const updatedReasons = [...values.reasonForLeaving]; // Create a copy of the current array
    
        if (updatedReasons.includes(value)) {
          // If the value is already in the array, remove it
          updatedReasons.splice(updatedReasons.indexOf(value), 1);
        } else {
          // If the value is not in the array, add it
          updatedReasons.push(value);
        }
    
        // Update the state with the updated array
        handleChange('reasonForLeaving')({ target: { value: updatedReasons } });
      };

    


  render() {
    const { values } = this.props;

    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <h2>Why do you want to leave the company?</h2>
          <FormGroup>
          <FormControlLabel
              control={
                <Checkbox
                  checked={values.reasonForLeaving.includes('Better Opportunity')}
                  onChange={this.handleChange('Better Opportunity')}
                  value="Better Opportunity"
                />
              }
              label="Better Opportunity"
            />

            <Box>
                <Box>
                  <FormControlLabel
                  label = 'test'
                  control={<Checkbox />}
                  onChange={this.handleChange('Better Opportunity')}
                  value="Better Opportunity" />
                </Box>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  checked={values.reasonForLeaving.includes('Work-Life Balance')}
                  onChange={this.handleChange('Work-Life Balance')}
                  value="Work-Life Balance"
                />
              }
              label="Work-Life Balance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.reasonForLeaving.includes('Salary')}
                  onChange={this.handleChange('Salary')}
                  value="Salary"
                />
              }
              label="Salary"
            />
            {/* Add more checkboxes as needed */}
            <RaisedButton
                    label = "Continue"
                    // primary = {true}
                    backgroundColor= "#5a287d"
                    labelColor = "#fff"
                    style={StyleSheet.button}
                    onClick={this.continue}
                />
                <RaisedButton
                    label = "Back"
                    // primary = {true}
                    backgroundColor= "#5a287d"
                    labelColor = "#fff"
                    style={StyleSheet.button}
                    onClick={this.back}
                    />
          </FormGroup>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
    container: {
      width: '300px', // Set a fixed width or use other units as needed
      margin: '0 auto', // Center the container horizontally
    },
    button: {
      margin: 15,
      backgroundColor: '#5a287d', // Change the button color here
    },
    checkbox: {
      marginBottom: 16,
  },
  };

export default FormReasonForLeaving;
