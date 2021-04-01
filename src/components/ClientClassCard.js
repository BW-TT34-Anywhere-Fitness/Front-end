import styled from 'styled-components'

const background1 = '#282F56'
const background2 = '#2A2F4A'

export default function ClientClassCard(props){
  const {
    instructor,
    type,
    starttime: time,
    duration,
    intensity,
    maxsize,
  } = props.class

  return (
    <DivMain color={props.color}>
      <div>
        <h3>{type}</h3>
        <h6>Led by <span>{instructor.firstName} {instructor.lastName}</span></h6>
      </div>
      <p>Intensity: {intensity}</p>
      <p>Date: {time}</p>
      <p>Time: {time}</p>
    </DivMain>
  )
}

const DivMain = styled.div`
  background: ${props => props.color === 0 ? background1 : background2};
  padding: 10px;
  width: 80%;

  * {
    margin: 0;
    font-size: initial;
  }

  p {
    margin-top: 0.5em;
  }
  
  h6 span {
    color: #0D58DA;
    color: #3d84ff;
  }
  
  h6 span:hover {
    cursor: pointer;
  }

`