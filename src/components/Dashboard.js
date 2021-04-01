
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getSelf } from 'functions/api';



// Automatically routes user to the correct dashboard based on the account type of their token.
const Dashboard = (props) => {

  const history = useHistory();

  useEffect(() => {
    redirectDashboard();
  });

  const redirectDashboard = async () => {

    try {
      const res = await getSelf();

      switch(res?.data?.accountype) {

        case 'instructor':
          history.push('/dashboard/instructor');
          return;

        case 'client':
          history.push('/dashboard/client');
          return;

        default:
          console.warn('no "accountype" field in user info');
          history.push('/');
          return;
      }
    }
    catch (err) {
      console.error(err);
      history.push('/');
    }
  }

  return (
    <></>
  )
}

export default Dashboard;