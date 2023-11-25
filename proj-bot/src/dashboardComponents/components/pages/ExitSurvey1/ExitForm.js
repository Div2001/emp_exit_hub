import React, {Component} from 'react';
import '../../../App';
import { Form } from 'react-router-dom';
// import FormUserDetails from './FormUserDetails';
// import FormPersonalDetails from './FormPersonalDetails';
// import Confirm from './Confirm';
// import Success from './Success'

import Page1 from './Page1';

export class ExitForm extends Component {
  state = {
    step: 1,
    name: '',
    empId: '',
    email: '',
    role: '',
    department: '',
    time: '',
    gender: '',
    location: '',
  }

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

   //Go back to prev step
   prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { name, empId, email, role, department, time, gender } = this.state;
    const values = { name, empId, email, role, department, time, gender }
    
    switch(step) {
      case 1:
        return(
          <Page1
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )

        case 2:
          return(
            <Page1
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange = {this.handleChange}
            values = {values}
            />
          )
        // case 3:
        //   return(
        //     <Confirm
        //     nextStep = {this.nextStep}
        //     prevStep = {this.prevStep}
        //     values = {values}
        //     />
        //   )
        // case 4:
        //   return <Success />
    }
    return (
      <div>Hello</div>
    )
  }
}

export default ExitForm