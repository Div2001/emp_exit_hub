import React, {Component} from 'react';
import '../../../App';
import { Form } from 'react-router-dom';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success'
import FormReasonForLeaving from './Checkbox';

export class ExitSurveyForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
    gender: '',
    reasonForLeaving: [], // New state for the question

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

  // // Handle fields change
  // handleChange = input => e => {
  //   this.setState({[input]: e.target.value});
  // }

  handleChange = (input) => (e) => {
    if (Array.isArray(this.state[input])) {
      const { value, checked } = e.target;
      this.setState((prevState) => {
        const updatedValue = checked
          ? [...prevState[input], value]
          : prevState[input].filter((item) => item !== value);
        return { [input]: updatedValue };
      });
    } else {
      this.setState({ [input]: e.target.value });
    }
  };
  
  
  



  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio, gender, reasonForLeaving } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio, gender, reasonForLeaving }
    
    switch(step) {
      case 1:
        return(
          <FormUserDetails
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )

        case 2:
          return(
            <FormPersonalDetails
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange = {this.handleChange}
            values = {values}
            />
          )
          case 3:
            return (
              <FormReasonForLeaving // Include the new component
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 4:
            return(
              <Confirm
              nextStep = {this.nextStep}
              prevStep = {this.prevStep}
              values = {values}
              />
            )
          case 5:
            return <Success />
    }
    return (
      <div>Hello</div>
    )
  }
}

export default ExitSurveyForm