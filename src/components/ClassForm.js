
import styled from 'styled-components';

import { StyledButton } from 'components/StyledComponents';
import DateTimeInput from 'components/DateTimeInput';
import DurationInput from 'components/DurationInput';

import useForm from 'hooks/useForm';



const InstructorDash = (props) => {
  const { value, onSubmit, buttonText='Schedule Class' } = props;

  const [classData, handleChange] = useForm(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(classData);
  }

  return (
    <StyledMain>
      <form onSubmit={handleSubmit}>

        <div className='field'>
          <label htmlFor='name'>Class Name</label>
          <input id='name' name='name' type='text' onChange={handleChange} value={classData.name} placeholder="Enter a name for your class" />
        </div>

        <div className='field'>
          <label htmlFor='type'>Class Type</label>
          <input id='type' name='type' type='text' onChange={handleChange} value={classData.type} placeholder="Enter a class type (e.g. Aerobic, Cardio, Yoga)" />
        </div>

        <div className='field'>
          <label htmlFor='time'>Start Time</label>
          <DateTimeInput value={classData.starttime} onChange={handleChange} />
        </div>

        <div className='field'>
          <label htmlFor='duration'>Duration (Minutes)</label>
          <DurationInput id='duration' name='duration' onChange={handleChange} value={classData.duration} />
        </div>

        <div className='field'>
          <label htmlFor='intensity'>Intensity</label>
          <select name='intensity' id='intensity' value={classData.intensity} onChange={handleChange}>
            <option disabled value=''> - Select a level - </option>
            {[ ...Array(10).keys() ].map(intensity => (
              <option value={intensity+1} key={intensity}>{intensity+1}</option>
            ))}
          </select>
        </div>

        <div className='field'>
          <label htmlFor='location'>Location</label>
          <input id='location' name='location' onChange={handleChange} value={classData.location} />
        </div>

        <div className='field'>
          <label htmlFor='maxsize'>Maximum Class Size</label>
          <input id='maxsize' name='maxsize' type='number' onChange={handleChange} value={classData.maxsize} />
        </div>

        <div className='submitButton'>
          <StyledButton size='md'>
            {buttonText}
          </StyledButton>
        </div>

      </form>
    </StyledMain>
  );
}

const StyledMain = styled.div`

  border-bottom: 2px solid ${props => props.theme.border};

  .field {
    padding-top: 1.5em;
  }

  label {
    display: block;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-bottom: 1em;
  }

  input, select, option {
    box-sizing: border-box;
    width: 700px;
    font-weight: 300;
  }

  .submitButton {
    padding-top: 3em;
    padding-bottom: 1em;
  }
`;



export default InstructorDash;
