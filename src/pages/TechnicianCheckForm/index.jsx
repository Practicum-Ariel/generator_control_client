import React from 'react';
import TechVisitForm from '../../components/TechVisitForm';

function TechnicianCheckForm({type= "m-d-w-i-g", inId}) {
  
  return <div>
    <TechVisitForm title={"בדיקה בעקבות תובנה :"} inputArr={[{label:"Monitor vibration levels regularly sagi audtae", typ:"checkbox"}]}/>
  </div>
}

export default TechnicianCheckForm;
