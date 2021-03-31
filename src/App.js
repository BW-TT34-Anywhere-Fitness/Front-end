
import { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';

import Home from 'components/Home';
import Navbar from 'components/Navbar';
import ClientDash from 'components/ClientDash';
import InstructorDash from 'components/InstructorDash';
import LandingPage from 'components/LandingPage';

import { login } from 'functions/api';



function App() {

  useEffect(() => {
    login({ username: 'user', password: 'user' })
    .then(res => {
      if (res?.data?.id_token) {
        localStorage.setItem('token', res.data.id_token);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <StyledBody>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard/client' component={ClientDash} />
          <Route path='/dashboard/instructor' component={InstructorDash} />
          <Route path='/landing' component={LandingPage} />
        </Switch>
      </Router>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  box-sizing: border-box;
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  color: ${props => props.theme.main};
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
