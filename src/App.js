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

function App() {
  return (
    <StyledBody>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/dashboard/client' component={ClientDash} />
          <Route path='/dashboard/instructor' component={InstructorDash} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </Router>
    </StyledBody>
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
