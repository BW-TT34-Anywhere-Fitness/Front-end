
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UserContext from 'contexts/UserContext';



const Navbar = (props) => {

  const { currentUser, logOut } = useContext(UserContext);

  const loggedIn = Boolean(currentUser);

  return (
    <StyledNavbar>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <Link to='/'>
          <div className='navText'><span className='whiteBox'>Anywhere</span> Fitness</div>
        </Link>

          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {loggedIn ? (
              <>
              <Link to='/dashboard/client'>
                <div className='navText'>Client Dash</div>
              </Link>

              {currentUser.accountype === 'instructor' ?
                <Link to='/dashboard/instructor'>
                  <div className='navText'>Instructor Dash</div>
                </Link>
              : <></>}
              
              <Link to='/' onClick={logOut}>
                <div className='navText'>Log Out</div>
              </Link>
              </>
            ) : (
              <>
              <Link to='/'>
                <div className='navText'>Log In</div>
              </Link>

              <Link to='/signup'>
                <div className='navText'>Sign Up</div>
              </Link>
              </>
            )}
          </div>

      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.header`
  padding: 20px;
  background: ${props => props.theme.field};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);

  .navText {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 0 15px;
    transition: .4s;
  }

  .whiteBox {
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.background};
    padding: 0 0.125em 0 0.375em;
    line-height: 1.65em;
    display: inline-block;
    transition: .4s;
  }

  
  .navText:hover {
    color: ${props => props.theme.selected};
    .whiteBox {
      background-color: ${props => props.theme.selected};
    }
  }
`;

export default Navbar;
