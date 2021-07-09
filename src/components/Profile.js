
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { StyledButton, StyledTitle } from 'components/StyledComponents';

import useForm from 'hooks/useForm';
import { getSelf, editUser } from 'functions/api';



const Profile = (props) => {

  const [ success, setSuccess ] = useState(false);
  const [ userData, handleChange, setUserData ] = useForm({});

  useEffect(() => {
    getSelf()
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        // console.log(err);
      });
  }, [ setUserData ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(userData)
      .then(res => {
        setSuccess(true);
      })
      .catch(err => {
        // console.log(err);
      });
  }

  return (
    <StyledMain>

      <StyledTitle>
        <h1>Your Profile</h1>
      </StyledTitle>

      <form onSubmit={handleSubmit}>

        <div className='field'>
          <label htmlFor='login'>Login</label>
          <input id='login' name='login' type='text' onChange={handleChange} value={userData.login || ''} placeholder="Enter a user name to log in with" />
        </div>

        <div className='field'>
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' onChange={handleChange} value={userData.email || ''} placeholder="Enter an email address" />
        </div>

        <div className='row'>
          <div className='field half'>
            <label htmlFor='firstName'>First</label>
            <input id='firstName' name='firstName' onChange={handleChange} value={userData.firstName || ''} placeholder="Your first name" />
          </div>
          <div className='field'>
            <label htmlFor='lastName'>Last</label>
            <input id='lastName' name='lastName' onChange={handleChange} value={userData.lastName || ''} placeholder="Your last name" />
          </div>
        </div>

        <div className='field'>
          <label>Account Type</label>
          <p className='capitalize'>{userData.accountype || ' '}</p>
        </div>

        <div className='submitButton'>
          <StyledButton size='md'>
            Save Changes
          </StyledButton>
        </div>

        {success ? <h4>Changes saved!</h4> : <></>}

      </form>
    </StyledMain>
  );
}



const StyledMain = styled.div`

  max-width: 700px;
  margin: auto;
  padding: 1em;

  .field {
    padding-top: 1.5em;
  }

  .half {
    width: calc(50% - 0.5em);
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .capitalize {
    text-transform: capitalize;
  }

  label {
    display: block;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-bottom: 1em;
  }

  input, select, option, textArea {
    border: none;
    background-color: ${props => props.theme.field};
    color: ${props => props.theme.main};
    padding: 0 1em;

    :focus {
      outline: 2px solid ${props => props.theme.selected};
    }
  }

  input, select, option {
    box-sizing: border-box;
    width: 100%;
    font-weight: 300;
  }

  input, select {
    height: 2.75em;
  }

  input:disabled {
    color: ${props => props.theme.border}
  }

  *:focus {
    outline: 0
  }

  .modal-div {
    padding: 0 1em;

    .button-row {
      display: flex;
      justify-content: space-around;

      p {
        color: ${props => props.theme.selected};
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  .submitButton {
    padding-top: 3em;
    padding-bottom: 1em;
  }
`;



export default Profile;
