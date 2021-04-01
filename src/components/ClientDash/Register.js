import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

import axiosWithAuth from '../../functions/axiosWithAuth'

export default function Register(props){
  const { id } = props
  const [registered, setRegistered] = useState(false)

  function onClick(){
    // axios.post("https://xnor.space/api/account/courses/1054", '', {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`}})
    // axios.post(`https://xnor.space/api/account/courses/${id}`, '', {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`}})
    if(registered)
      return

    axiosWithAuth().post(`/account/courses/${id}`, '')
      .then( res => {
        // console.log(res)
        setRegistered(true)
      })
      .catch( err => {
        // console.log(err)
      })
  }

  return (
    <div>
      <ButtonStyled type='button' registered={registered} onClick={onClick}>{registered ? 'Registered!' : 'Register'}</ButtonStyled>
    </div>
  )
}

const ButtonStyled = styled.button`
  background: #${props => props.registered ? 'A5A8AC' : 'FFF'};
  box-sizing: border-box;
  border: none;
  cursor: ${props => props.registered ? '' : 'pointer'};
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
  /* background: ${props => props.theme.main}; */
  color: ${props => props.theme.contrastText};
`