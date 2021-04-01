
import { useContext, useEffect } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

import LandingPage from 'components/LandingPage';

import UserContext from 'contexts/UserContext';



/**
 * Home checks for a token in localStorage and redirects them to the right page.
 * If no token, it shows landing page. If yes token, it takes user to Dashboard.
 */

const Home = (props) => {

  const { currentUser } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push('/dashboard');
    }
  });

  return (
    <>
      {!currentUser && <LandingPage />}
    </>
  );
}

const StyledDiv = styled.div`
    display:flex;
    justify-content: center;
`

export default Home;