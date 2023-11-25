import React, {Component} from 'react';
import '../../../App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
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
                    hintText = "Enter your first Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                    floatingLabelFocusStyle={{ color: '#5a287d' }}
                    />
                    <br />
                    <TextField
                    hintText = "Enter your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
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

export default FormUserDetails