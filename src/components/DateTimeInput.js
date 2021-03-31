
import styled from 'styled-components';
import moment from 'moment';
import Datetime from 'react-datetime';



const DateTimeInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (date) => {
    onChange({
      target: {
        name: 'dateTime',
        id: props.id,
        value: date.valueOf()
      }
    });
  }
  console.log(value)

  const yesterday = moment().subtract(1, 'day');
  const noPastDates = current => {
    return current.isAfter(yesterday);
  };

  return (
    <StyledMain>
      <Datetime
        onChange={handleChange}
        isValidDate={noPastDates}
        initialViewDate={moment()}
        inputProps={{
          placeholder: props.placeholder ? props.placeholder : '- Select a date & time below -',
        }}
        value={value}
      />
    </StyledMain>
  );
}

const StyledMain = styled.div`

  .form-input {

  }

  select {
    text-align-last: center;
  }

  .rdtYear, .rdtMonth, .rdtDay, .rdtBtn, .rdtPrev, .rdtNext, .rdtSwitch, .rdtTimeToggle {
    cursor: pointer;
    :hover {
      color: ${props => props.theme.selected};
    }
  }

  .rdtSwitch, .rdtTimeToggle {
    text-decoration: underline;
    font-weight: 600;
  }

  .rdtActive {
    color: ${props => props.theme.selected};
  }

  .rdtDisabled {
    color: ${props => props.theme.border};
    cursor: default;
    :hover {
      color: ${props => props.theme.border};
    }
  }

  .rdtCounters {
    display: flex;
    align-items: center;
    text-align: center;

    .rdtCounter {
      padding-left: 0.25em;
    }
  }
`;



export default DateTimeInput;
