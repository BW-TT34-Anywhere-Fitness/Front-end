
import styled from 'styled-components';
import moment from 'moment';
import Datetime from 'react-datetime';

const localDateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';



const DateTimeInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (date) => {
    onChange({
      target: {
        name: 'dateTime',
        value: date.format(localDateTimeFormat)
      }
    });
  }

  const yesterday = moment().subtract(1, 'day');
  const noPastDates = current => {
    return current.isAfter(yesterday);
  };

  return (
    <StyledMain>
      <Datetime
        onChange={handleChange}
        isValidDate={noPastDates}
        inputProps={{
          placeholder: '- Select a date & time below -',
        }}
        value={value ? moment.utc(value, localDateTimeFormat) : moment()}
      />
    </StyledMain>
  );
}

const StyledMain = styled.div`

  table {
    background-color: ${props => props.theme.field};
    padding: 0.5em;
    margin-top: 0.25em;
    text-align: center;
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

    .rdtCounter {
      padding-left: 0.25em;
    }
  }
`;



export default DateTimeInput;
