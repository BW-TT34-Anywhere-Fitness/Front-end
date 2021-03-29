
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';

import Navbar from 'components/Navbar';
import Home from 'components/Home';
import ClientDash from 'components/ClientDash';
import InstructorDash from 'components/InstructorDash';



function App() {
  return (
    <StyledBody>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard/client' component={ClientDash} /> 
          <Route path='/dashboard/instructor' component={InstructorDash} /> 
        </Switch>
      </Router>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  color: ${props => props.theme.main};

  a {
    color: ${props => props.theme.main};
    text-decoration: none;
  }
`;

export default App;
