
import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';

import Home from 'components/Home';
import SignUp from 'components/SIgnUp';
import Navbar from 'components/Navbar';
import Dashboard from 'components/Dashboard';
import ClientDash from 'components/ClientDash';
import InstructorDash from 'components/InstructorDash';
import PrivateRoute from 'components/PrivateRoute';

import UserContext from 'contexts/UserContext';
import { getSelf } from 'functions/api';



function App() {

  const [ currentUser, setCurrentUser ] = useState(null);

  useEffect(() => {
    // console.log('UserContext.currentUser:', currentUser);
  }, [ currentUser ]);

  useEffect(() => {
    // When page is first opened, check for a previously logged in user.
    updateUser();
  }, []);

  const logOut = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
  }

  const updateUser = () => {
    const token = localStorage.getItem('token');

    if (token) {
      getSelf()
        .then(res => {
          setCurrentUser(res.data);
        })
        .catch(err => {
          // console.log(err);
        });
    }
    else {
      // console.log('no token');
    }
  }

  return (
    <UserContext.Provider value={{ currentUser, updateUser, logOut }}>
    <StyledBody>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/dashboard/client' component={ClientDash} />
          <PrivateRoute path='/dashboard/instructor' component={InstructorDash} />
        </Switch>
      </Router>
    </StyledBody>
    </UserContext.Provider>
  );
}

const StyledBody = styled.div`
  box-sizing: border-box;
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  color: white;
  font-size: 17pt;
  font-weight: 300;
  letter-spacing: 0.025em;

  h1 {
    font-size: 2.5em;
    font-weight: 600;
  }

  h2 {
    font-size: 1.75em;
    font-weight: 600;
  }

  h3 {
    font-size: 1.35em;
    font-weight: 600;
  }

  h4 {
    font-size: 1.10em;
    font-weight: 600;
  }

  a {
    color: ${props => props.theme.main};
    text-decoration: none;
  }
`;

export default App;
