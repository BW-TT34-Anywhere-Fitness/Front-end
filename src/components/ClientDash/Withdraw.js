import axios from 'axios'
import styled from 'styled-components'

export default function Register(props){
  const { id } = props

  function onClick(){
    axios.delete(`https://xnor.space/api/account/courses/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
      .then( res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })
  }

  return (
    <div>
      <ButtonStyled type='button' onClick={onClick}>Withdraw</ButtonStyled>
    </div>
  )
}

const ButtonStyled = styled.button`
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  letter-spacing: 0.25em;
  padding: 0 1.75em;
  text-transform: uppercase;
  white-space: nowrap;

  // md
  font-size: 0.8em;
  line-height: 3.5em;

  // filled
  background: ${props => props.theme.main};
  color: ${props => props.theme.contrastText};
`