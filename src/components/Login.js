import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function LoginForm() {
    const [formValues, setFormValues] = useState({username:"", password:""})

    const handleChange= (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const formSubmit = (e) => {
        e.preventDefault();
        axios.post("http://xnor.space/api/authenticate", formValues)
        .then((res)=>{
            console.log(res)
            localStorage.setItem("token", res.data.id_token)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    return (
        <FormFieldsetStyled onSubmit = {formSubmit}>
            <h1>Login</h1>
            <LabelStyled htmlFor ='login_username'>Username</LabelStyled>
            <InputStyled
                id='login_username'
                type = "text"
                name = "username"
                value = {formValues.username}
                onChange = {handleChange}
            />
            <br/>
            <LabelStyled htmlFor ='login_password'>Password</LabelStyled>
            <InputStyled
                id='login_password'
                type = "password"
                name = "password"
                value = {formValues.password}
                onChange = {handleChange}
            />
            <br/>
            <SubmitStyled>Submit</SubmitStyled>
        </FormFieldsetStyled>
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