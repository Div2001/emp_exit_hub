import React, {Component} from 'react';
import '../../../App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import Checkbox from 'material-ui/Checkbox';
import { Box, FormControlLabel, Checkbox} from '@mui/material'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const { values, handleChange } = this.props;
    return (
        <MuiThemeProvider>
            <div style={styles.container}>
            <React.Fragment>
              <Box>
                <Box>
                  <FormControlLabel label = 'test' control={<Checkbox />} />
                </Box>
              </Box>
                <TextField
                hintText = "Enter your Occupation"
                floatingLabelText="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
                underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                floatingLabelFocusStyle={{ color: '#5a287d' }}
                />
                <br />
                <TextField
                hintText = "Enter your City"
                floatingLabelText="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
                underlineFocusStyle={{ borderColor: '#5a287d' }} // Change the highlight color here
                floatingLabelFocusStyle={{ color: '#5a287d' }}
                />
                <br />
                <TextField
                hintText = "Enter your bio"
                floatingLabelText="Bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
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
                <RaisedButton
                    label = "Back"
                    // primary = {true}
                    backgroundColor= "#5a287d"
                    labelColor = "#fff"
                    style={StyleSheet.button}
                    onClick={this.back}
                    />
            </React.Fragment>
            </div>
        </MuiThemeProvider>
    );
  }
}

// const styles = {
//     button: {
//         margin: 15
//     }
// }

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

export default FormPersonalDetails