
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = (props) => {

  const { component: Component, ...rest } = props;
  
  const render = (props) => {
    return localStorage.getItem('token') ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    );
  }


  return (
    <Route {...rest} render={render} />
  );
}



export default PrivateRoute;
