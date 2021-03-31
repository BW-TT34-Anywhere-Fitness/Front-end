import LoginForm from './Login.js'
import SignUpForm from './SignUp.js'

import styled from 'styled-components'
const Home = (props) => {
  return (
    <>
        <div>This is Home</div>
        <StyledDiv>
            <LoginForm />
            <SignUpForm />
        </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
    display:flex;
    justify-content: center;
`

export default Home;