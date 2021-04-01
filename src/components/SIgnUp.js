import React, {useState} from 'react'
import styled from 'styled-components'

import { StyledButton } from 'components/StyledComponents';

import { signUp } from 'functions/api';

export default function SignUpForm() {
    const [formValues, setFormValues] = useState({login:"", password:"", accounttype: 'student'})
    const [ focus, setFocus ] = useState({login:false, password:false})
    const [ success, setSuccess ] = useState(false);

    const handleChange= (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        signUp(formValues)
            .then(res => {
                console.log(res);
                setSuccess(true);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function onFocus(evt) {
        const { name } = evt.target
        setFocus({ ...focus, [name]: true })
    }
    
    function onBlur(evt) {
        const { name } = evt.target
        const value = formValues[name] === '' ? false : true
        setFocus({...focus, [name]: value});
    }
    

    return (
        <FormFieldsetStyled onSubmit = {formSubmit}>
            <h1>Sign Up</h1>
            <LabelStyled focus={focus.login} htmlFor ='login'>login</LabelStyled>
            <InputStyled
                id='login'
                type = "text"
                name = "login"
                value = {formValues.login}
                onChange = {handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <LabelStyled focus={focus.password} htmlFor ='password'>Password</LabelStyled>
            <InputStyled
                id='password'
                type = "password"
                name = "password"
                value = {formValues.password}
                onChange = {handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <LabelStyled htmlFor ='accounttype'>Account Type</LabelStyled>
            <select value={formValues.accounttype} name='accounttype' onChange={handleChange}>
                <option value='student'>Student</option>
                <option value='instructor'>Instructor</option>
            </select>
            <StyledButton>Sign Up</StyledButton>
            {success && <h4>Sign up successful!</h4>}
        </FormFieldsetStyled>
    )
}

const FormFieldsetStyled = styled.form`
  border-radius: 4px;
  box-sizing: border-box;
  margin: 10px 0;
  display: inline-block;
  padding: 10px;
  position: relative;
  text-align: left;
  width: 300px;
  font-family: "Source Sans Pro", Helvetica,sans-serif;
`
const LabelStyled = styled.label`
  font-size: 20px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  white-space: nowrap;
  color: white;
  font-weight: ${props => {
    return props.focus ? 'bolder' : 'lighter'
  }};
  line-height: 1;
  padding: 0 3px;
  top: 0;
  transition: 0.15s;
  display:block;
`
const InputStyled = styled.input`
  font-size: 20px;
  white-space: nowrap;
  margin: 5px 0px;
  border: none;
  display: block;
  font-size: 20px;
  outline: none;
  width: 250px;
`