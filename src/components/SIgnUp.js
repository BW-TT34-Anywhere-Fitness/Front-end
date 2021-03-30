import React, {useState} from 'react'
import styled from 'styled-components'

export default function SignUpForm() {
    const [formValues, setFormValues] = useState({username:"", password:""})
    const [ focus, setFocus ] = useState({username:false, password:false})

    const handleChange= (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const formSubmit = (e) => {
        e.preventDefault();
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
            <LabelStyled focus={focus.username} htmlFor ='username'>Username</LabelStyled>
            <InputStyled
                id='username'
                type = "text"
                name = "username"
                value = {formValues.username}
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