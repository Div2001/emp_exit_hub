import React, {Component} from 'react';
import '../../../App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Page1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

  render() {
    const { values, handleChange } = this.props;
    return (
        <MuiThemeProvider>
            <div style={styles.container}>
                <React.Fragment>
                    <TextField
                    hintText = "Enter your Name"
                    floatingLabelText="Name"
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                    underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                    floatingLabelFocusStyle={{ color: '#5a287d' }}
                    />
                    <br />
                    <TextField
                    hintText = "Enter your Employee ID"
                    floatingLabelText="Employee ID"
                    onChange={handleChange('empId')}
                    defaultValue={values.empId}
                    underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                    floatingLabelFocusStyle={{ color: '#5a287d' }}
                    />
                    <br />
                    <TextField
                    hintText = "Enter your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                    floatingLabelFocusStyle={{ color: '#5a287d' }}
                    />
                    <br />
                    <TextField
                    hintText = "Enter your Role"
                    floatingLabelText="Role"
                    onChange={handleChange('role')}
                    defaultValue={values.role}
                    underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                    floatingLabelFocusStyle={{ color: '#5a287d' }}
                    />
                    <br /> 
                    <TextField
                    hintText = "Enter your Department"
                    floatingLabelText="Department"
                    onChange={handleChange('department')}
                    defaultValue={values.department}
                    underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                    floatingLabelFocusStyle={{ color: '#5a287d' }}
                    />
                    <br /> 
                    <TextField
                    hintText = "Enter your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                    floatingLabelFocusStyle={{ color: '#5a287d' }}
                    />
                    <br /> 
                    <TextField
                    hintText = "How long have you been in the company?"
                    floatingLabelText="Months in company"
                    onChange={handleChange('time')}
                    defaultValue={values.time}
                    underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                    floatingLabelFocusStyle={{ color: '#5a287d' }}
                    />
                    <br />   
                    <br />             
                    <RaisedButton
                    label = "Continue"
                    // primary = {true}
                    backgroundColor= "#5a287d"
                    labelColor = "#fff"
                    style={StyleSheet.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </div>
        </MuiThemeProvider>
    );
  }
}

{/* const styles = {
    button: {
        margin: 15
    }
} */}

const styles = {
  container: {
    width: '300px', // Set a fixed width or use other units as needed
    margin: '0 auto', // Center the container horizontally
  },
  button: {
    margin: 15,
    backgroundColor: '#5a287d', // Change the button color here
  },
};

export default Page1