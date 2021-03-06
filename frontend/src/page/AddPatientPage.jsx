import React from 'react';
import {AddPatient, AddReduxPatient} from '../component/container/index';
import PageTemplate from './PageTemplate.jsx';

const AddPatientPage = () => {
  return (
    <PageTemplate>
      <div className="page-header">
        <h1>Add Patient</h1>
        <AddReduxPatient />
      </div>
    </PageTemplate>
  );
};

export default AddPatientPage;
