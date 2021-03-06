import React from 'react';
import {AddDisability} from '../component/container/index';
import PageTemplate from './PageTemplate.jsx';
import { withRouter } from 'react-router'

const AddPatientDisabilityPage = (match) => {
  return (
    <PageTemplate>
      <div className="page-header">
        <h1>Add Patient disability</h1>
        <AddDisability patientId={match.params.patientId}/>
      </div>
    </PageTemplate>
  );
};

export default withRouter(AddPatientDisabilityPage);
