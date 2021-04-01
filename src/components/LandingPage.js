import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logotemp from '../gymlogotemp.jpg';
import axios from 'axios';
const initialValues = {
    credentials: {
        username: '',
        password: '',
    }

}

const errorCodeMessages = {
    default: 'Error logging in.',
    401: "Login info not found. You may need to create an account.",
}

const LandingPage = (props) => {

    const { initialError, redirectUser } = props;

    const [creds, setCreds] = useState(initialValues);
    const [ error, setError ] = useState(initialError || '');

    const history = useHistory();

    const handleChange = e => {
        setCreds({
            credentials: {
                ...creds.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        axios
            .post('http://xnor.space/api/authenticate', creds.credentials)
            .then(async res => {
                console.log(res);
                localStorage.setItem('token', res.data.id_token);
                redirectUser && redirectUser();
            })
            .catch(err => {
                console.log(err.response);

                let errorMessage = errorCodeMessages.default;
                if (err.response) {
                    if (errorCodeMessages[err.response?.status]) {
                        errorMessage = errorCodeMessages[err.response.status];
                    }
                }
                else {
                    errorMessage = 'Error connecting to the server.';
                }
                setError(errorMessage);
            })

    }

    const goToRegister = e => {
        e.preventDefault()
        history.push('/signup');
    }


    return (
        <StyledContainer>
            <StyledBody>
                <StyledAbout>
                    <StyledPicBox>
                        <StyledImg src={logotemp} />
                    </StyledPicBox>
                </StyledAbout>
                <StyledFormBox>
                    <FormCenterHorz>
                        <StyledForm onSubmit={handleSubmit}>

                            <StyledFSep>
                                <StyledInput
                                    type="text"
                                    name='username'
                                    value={creds.credentials.username}
                                    onChange={handleChange}
                                />
                            </StyledFSep>
                            <StyledFSep>
                                <StyledInput
                                    type="password"
                                    name="password"
                                    value={creds.credentials.password}
                                    onChange={handleChange}
                                />
                            </StyledFSep>
                            <StyledButton>
                                <StyleP>Log In</StyleP>
                            </StyledButton>
                            <StyledTextBox>
                                <StylePDark>Forgot Password? That sucks.</StylePDark>
                            </StyledTextBox>


                        </StyledForm>
                    </FormCenterHorz>
                    <FormCenterHorzB>
                        <StyledForm onSubmit={goToRegister}>




                            <StyledDivider>

                            </StyledDivider>
                            <StyledButton>
                                <StyleP>Create New Account</StyleP>
                            </StyledButton>

                            {error && <StyledError>{error}</StyledError>}


                        </StyledForm>
                    </FormCenterHorzB>
                </StyledFormBox>
            </StyledBody>
            <StyledFooter>

            </StyledFooter>

        </StyledContainer>
    )
}

export default LandingPage


/*GLOBAL CONTAINER LAYOUT STYLES BELOW*/
const StyledContainer = styled.div`
display:flex;
justify-content:center;
header{
    display: none
}

`
const StyledBody = styled.div`
display:flex;
width:90%;
justify-content:space-evenly;
padding-bottom: 132px;
padding-top: 92px;

`
const StyledFooter = styled.div`

`
const StyleP = styled.p`
color:white;
align-items:center;
`
const StylePDark = styled.p`
color:#2a2f4a;
align-items:center;
:hover{
    cursor:pointer;
}
`

/*BODY CONTAINER LAYOUT STYLES BELOW*/
const StyledAbout = styled.div`
display:flex;

`
const StyledFormBox = styled.div`
display:flex;
background-color:white;
width:350px;
height:350px;
flex-direction:column;
justify-content:space-evenly;
border-radius:4px;
`

/*FORM LAYOUT STYLES BELOW*/

const FormCenterHorz = styled.div`
display:flex;
justify-content:center;
width:100%;
height:70%;
`
const FormCenterHorzB = styled.div`
display:flex;
justify-content:center;
width:100%;
height:30%;
`
const StyledForm = styled.form`
display:flex;
flex-direction:column;
justify-content:space-evenly;
width:90%;
`
const StyledInput = styled.input`
height:40px;
border-radius:4px;
border: 1px solid transparent;
border-top:none;
border-bottom:1px solid #DDD;
box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
text-indent:14px;
background-color:white;
:focus { 
    outline:none;
    border-color:#9ecaed;
    box-shadow:0 0 8px #9ecaed;
    
}
`
const StyledFSep = styled.div`
display:flex;
flex-direction:column;
`
const StyledButton = styled.button`
display:flex;
height: 40px;
width:100%;
align-items:center;
justify-content:center;
background-color:#3c446c;
border-radius:4px;
border:1px solid transparent;
:hover{
    cursor:pointer;
    background-color:#2a2f4a
}
`
const StyledTextBox = styled.div`
display:flex;
width:100%;
justify-content:center;

`
const StyledDivider = styled.div`
// outline: 1px solid #3c446c;
border-bottom: 1px solid #dadde1;
`
/*ABOUT LAYOUT STYLES BELOW*/
const StyledPicBox = styled.div`
@media(max-width:796px) {
    display: none;
}
`
const StyledImg = styled.img`
width:350px;
height:350px;
border-radius:4px;
`

const StyledError = styled.p`
    color: red;
`;
