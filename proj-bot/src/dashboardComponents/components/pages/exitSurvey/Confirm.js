import App from "../../../App";

import React, {Component} from 'react';
import '../../../App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


  render() {
    // const secondaryTextStyle = {
    //     whiteSpace: 'pre-line', // Allow multiple lines in the secondary text
    // };
    const { values: {firstName, lastName, email, occupation, city, bio, reasonForLeaving } } = this.props;
    return (
        <MuiThemeProvider>
            <div style={styles.container}>
            <React.Fragment>
                <List>
                    <ListItem
                    primaryText="First Name"
                    secondaryText= { firstName }
                    />
                </List>
                <List>
                    <ListItem
                    primaryText="Last Name"
                    secondaryText= { lastName }
                    // secondaryTextLines={5}
                    // style={secondaryTextStyle}
                    />
                </List>
                <List>
                    <ListItem
                    primaryText="Email"
                    secondaryText= { email }
                    />
                </List>
                <List>
                    <ListItem
                    primaryText="Occupation"
                    secondaryText= { occupation }
                    />
                </List>
                <List>
                    <ListItem
                    primaryText="City Name"
                    secondaryText= { city }
                    />
                </List>
                <List>
                    <ListItem
                    primaryText="Bio"
                    secondaryText= { bio }
                    />
                </List>
                <List>
                <ListItem
                    primaryText="Reason for Leaving"
                    secondaryText={reasonForLeaving.join(', ')} // Display selected choices
                />
                </List>
                
                <RaisedButton
                    label = "Confirm and Submit"
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
      width: '700px', // Set a fixed width or use other units as needed
      margin: '0 auto', // Center the container horizontally
    },
    button: {
      margin: 15,
      backgroundColor: '#5a287d', // Change the button color here
    },
  };

export default Confirm