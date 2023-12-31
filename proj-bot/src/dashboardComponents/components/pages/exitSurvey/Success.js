import React, {Component} from 'react';
import '../../../App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Success extends Component {
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
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <h1>Thank you for you submission</h1>
            </React.Fragment>
        </MuiThemeProvider>
    );
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Success