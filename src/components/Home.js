
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import LandingPage from 'components/LandingPage';

import { getSelf } from 'functions/api';



/**
 * Home checks for a token in localStorage and redirects them to the right page.
 * If no token, it shows landing page. If yes token, it takes user to Dashboard.
 */
const Home = (props) => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState('');

  const history = useHistory();

  useEffect(() => {
    redirectUser();
  });

  const redirectUser = async () => {

    setIsLoading(true);

    const token = localStorage.getItem('token');

    if (!token) {
      console.log('No token found in localStorage.');
      setIsLoading(false);
    }
    else {
      // Tries to do a get using your token. If it didn't work then your token expired.
      getSelf()
        .then(res => {
          console.log(res);
          history.push('/dashboard');
        })
        .catch(err => {
          console.log(err);
          history('/');
        });
    }
  }

  return (
    <>
      {isLoading ? 
        <></>
        :
        <LandingPage initialError={error} redirectUser={redirectUser}
      />}
    </>
  );
}

export default Home;
