
import styled from 'styled-components'
import moment from 'moment';

import { StyledButton } from 'components/StyledComponents';

const background1 = '#282F56'
const background2 = '#2A2F4A'

const dateFormat = 'dddd, MMMM Do YYYY';
const timeFormat = 'h:mma';

export default function ClientClassCard(props){
  const { afClass, onEditClick, onDeleteClick } = props;

  const {
    type,
    starttime,
    duration,
    intensity,
    maxsize,
    name,
    location
  } = afClass;

  let displayName = 'Unnamed class';
  if (name) displayName = name;
  if (type) displayName += ` (${type})`;

  return (
    <DivMain color={props.color}>
      <DivContent>
        <div className='row'>
          <div>
            <h3>{displayName}</h3>
            {starttime && <p><b>{moment(starttime).format(dateFormat)}</b> @ <b>{moment(starttime).format(timeFormat)}</b></p>}
            <div style={{height: '0.5em'}} />
            {intensity && <p><b>Intensity:</b> {intensity}</p>}
            {duration && <p><b>Duration:</b> {moment.duration(duration).humanize()}</p>}
            {maxsize && <p><b>Class Size:</b> {maxsize}</p>}
            {location && <p><b>Location:</b> {location}</p>}
          </div>
          <div className='row'>
            <StyledButton size='md' onClick={onEditClick}>
              Edit
            </StyledButton>
            <StyledButton size='md' variant='outlined' style={{marginLeft: '0.5em'}} onClick={onDeleteClick}>
              Delete
            </StyledButton>
          </div>
        </div>
      </DivContent>
    </DivMain>
  )
}

const DivMain = styled.div`
  background: ${props => props.color === 0 ? background1 : background2};
  display: flex;
  padding: 1em;
  width: 80%;
  border-bottom: 1px solid ${props => props.theme.border};

  b {
    font-weight: 600;
  }

  h3, p {
    line-height: 1.25;
  }

  * {
    margin: 0;
    font-size: initial;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }
`

const DivContent = styled.div`
  flex-grow: 1;
`
