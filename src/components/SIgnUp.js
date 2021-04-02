
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

import { signUp } from 'functions/api';

export default function SignUpForm() {
    const [formValues, setFormValues] = useState({login:"", password:"",email:"", accounttype:"student"})
    const [ isLoading, setIsLoading ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    const history = useHistory();

    const handleChange= (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const formSubmit = (e) => {
        e.preventDefault();
        // console.log(formValues);
        setIsLoading(true);
        signUp(formValues)
            .then(res => {
                // console.log(res);
                setFormValues({login:"", password:"",email:"", accounttype:"student"});
                setSuccess(true);
            })
            .catch(err => {
                // console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const backToLogin = () => {
        history.push('/');
    }

    return (
        <>
        <FormFieldsetStyled onSubmit = {formSubmit}>
            <h1>Sign Up</h1>
            <LabelStyled htmlFor ='signup_login'>Username</LabelStyled>
            <InputStyled
                id='signup_login'
                type = "text"
                name = "login"
                value = {formValues.login}
                onChange = {handleChange}
                disabled={isLoading}
            />
            <br/>
            <LabelStyled htmlFor ='signup_email'>Email</LabelStyled>
            <InputStyled
                id='signup_email'
                type = "email"
                name = "email"
                value = {formValues.email}
                onChange = {handleChange}
                disabled={isLoading}
            />
            <br/>
            <LabelStyled htmlFor ='firstName'>First Name</LabelStyled>
            <InputStyled
                id='firstName'
                type = "firstName"
                name = "firstName"
                value = {formValues.firstName || ''}
                onChange = {handleChange}
                disabled={isLoading}
            />
            <br/>
            <LabelStyled htmlFor ='lastName'>Last Name</LabelStyled>
            <InputStyled
                id='lastName'
                type = "lastName"
                name = "lastName"
                value = {formValues.lastName || ''}
                onChange = {handleChange}
                disabled={isLoading}
            />
            <br/>
            <LabelStyled htmlFor ='signup_password'>Password</LabelStyled>
            <InputStyled
                id='signup_password'
                type = "password"
                name = "password"
                value = {formValues.password}
                onChange = {handleChange}
                disabled={isLoading}
            />
            <br/>
            <SelectStyled
            id = "signup_role"
            name = "accounttype"
            onChange={handleChange}
            disabled={isLoading}>
                <option
                value = "student"
                >Student</option>
                <option
                value = "instructor"
                >Instructor</option>
            </SelectStyled>
            <br/>
            {!success && <SubmitStyled disabled={isLoading}>Submit</SubmitStyled>}
        </FormFieldsetStyled>
        {success && <>
            <h4>Sign up successful!</h4>
            <SubmitStyled onClick={backToLogin}>Back to Login</SubmitStyled>
        </>}
        </>
    )
}

const FormFieldsetStyled = styled.form`
    border-radius: 4px;
    box-sizing: border-box;
    margin: 10px 15px;
    display: inline-block;
    padding: 10px;
    position: relative;
    text-align: left;
    font-family: "Source Sans Pro", Helvetica,sans-serif;
    h1 {
        font-size: 1.5em;
    }
`
const LabelStyled = styled.label`
    color: #ffffff;
    display: block;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
`
const InputStyled = styled.input`
    height: 2.75em;
    appearance: none;
    background: rgba(212, 212, 255, 0.035);
    border: none;
    border-radius: 0;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;
`
const SubmitStyled = styled.button`
    appearance: none;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    box-shadow: inset 0 0 0 2px #ffffff;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 0.8em;
    font-weight: 600;
    height: 3.5em;
    letter-spacing: 0.25em;
    line-height: 3.5em;
    padding: 0 1.75em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
`
const SelectStyled = styled.select`
    height: 2.75em;
    background: rgba(212, 212, 255, 0.035);
    border: none;
    border-radius: 0;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 115.5%;
    option {
        color: white;
        background-color: #242943;
    }
`