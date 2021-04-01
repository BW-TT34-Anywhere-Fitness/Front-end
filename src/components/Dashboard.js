
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserContext from 'contexts/UserContext';



// Dashboard automatically routes user to the correct dashboard based on the account type of their token.
const Dashboard = (props) => {

  const history = useHistory();

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    switch(currentUser?.accountype) {
      case 'student':
        history.push('/dashboard/client');
        break;

      case 'instructor':
        history.push('/dashboard/client');
        break;

      default:
        break;
    }
  });

  return (
    <></>
  )
}

export default Dashboard;