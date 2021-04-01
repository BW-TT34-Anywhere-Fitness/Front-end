import LoginForm from './Login.js'
import SignUpForm from './SIgnUp.js'
import styled from 'styled-components'

const Home = (props) => {
  return (
    <>
      <div></div>
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