import React, {PropTypes} from "react";
import {Form, Control, Errors} from "react-redux-form";
import InputMask from 'react-input-mask';
import InputField from "./InputField.jsx";
import moment from "moment";

const PersonalIdInput = (props) => {
  return <InputMask className="form-control" mask="99999999999" maskChar="_"
                    value={props.value ? props.value : ""} {...props}/>;
};

const BirthDateInput = (props) => {
  return <InputMask className="form-control" mask="9999-99-99" maskChar="_"
                    value={props.value ? props.value : ""} {...props} />;
};

const maskedRequired = (val) => val && val.indexOf('_') === -1
const trimRequired = (val) => val && val.trim().length > 0;

class PatientForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(patient) {
    this.props.onSave(patient);
  }

  render() {
    return <Form className="patient-form" model="patients.activePatient" onSubmit={(patient) =>
      this.handleSubmit(patient)} >
      <InputField id="patient.personalId" label="Enter personal id:" >
        <Control.text model=".personalId" id="patient.personalId" component={PersonalIdInput}/>
        <Errors className="errors" model=".personalId" messages={{
          personalId: 'Please enter a valid personal id.',
        }} />
      </InputField>

      <InputField id="patient.birthDate" label="Enter date of birth:" defaultValue="">
        <Control.text model=".birthDate" id="patient.birthDate" component={BirthDateInput}/>
        <Errors className="errors" model=".birthDate" messages={{
          valid: 'Please enter a date of birth.',
        }} />
      </InputField>

      <InputField id="patient.firstName" label="First Name:">
        <Control.text model=".firstName" id="patient.firstName" className="form-control"/>
        <Errors className="errors" model=".firstName" messages={{
          required: 'Please enter a First Name.',
        }} />
      </InputField>

      <InputField id="patient.lastName" label="Last Name:">
        <Control.text model=".lastName" id="patient.lastName" className="form-control"/>
        <Errors className="errors" model=".lastName" messages={{
          required: 'Please enter a Last Name.',
        }} />
      </InputField>

      <InputField id="patient.occupation" label="Occupation:">
        <Control.text model=".occupation" id="patient.occupation" className="form-control"/>
        <Errors className="errors" model=".occupation" messages={{
          required: 'Please enter an Occupation .',
        }} />
      </InputField>
      <button className="btn" type="submit" >Save</button>
      <button className="btn" type="button" onClick={() => this.props.onBack()}>Back</button>
    </Form>
  }
}

PatientForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default PatientForm;

