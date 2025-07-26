import React from 'react';
import styles from './CohortDetails.module.css';

const cohortData = [
  {
    name: 'INTADMDF010 - .NET FSD',
    startedOn: '22-Feb-2022',
    status: 'Scheduled',
    coach: 'Aasthma',
    trainer: 'Jojo Jose'
  },
  {
    name: 'ADM21JF014 - Java FSD',
    startedOn: '10-Sep-2021',
    status: 'Ongoing',
    coach: 'Apoorv',
    trainer: 'Elisa Smith'
  },
  {
    name: 'CDBJF12025 - Java FSD',
    startedOn: '24-Dec-2021',
    status: 'Ongoing',
    coach: 'Aasthma',
    trainer: 'John Doe'
  }
];

function CohortDetails() {
  return (
    <div>
      <h2>Cohorts Details</h2>
      {cohortData.map((cohort, index) => (
        <div key={index} className={styles.box}>
          <h3 style={{ color: cohort.status === 'Ongoing' ? 'green' : 'blue' }}>
            {cohort.name}
          </h3>
          <dl>
            <dt>Started On</dt>
            <dd>{cohort.startedOn}</dd>
            <dt>Current Status</dt>
            <dd>{cohort.status}</dd>
            <dt>Coach</dt>
            <dd>{cohort.coach}</dd>
            <dt>Trainer</dt>
            <dd>{cohort.trainer}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
}

export default CohortDetails;
