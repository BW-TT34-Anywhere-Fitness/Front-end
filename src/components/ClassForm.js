
import styled from 'styled-components';

import { StyledButton } from 'components/StyledComponents';
import DateTimeInput from 'components/DateTimeInput';

//@ts-ignore
import useForm from 'hooks/useForm';

const intensities = [ 
  { id: 0, name: 'Beginner' },
  { id: 1, name: 'Intermediate' },
  { id: 2, name: 'Advanced' },
  { id: 3, name: 'Expert' }
];



const InstructorDash = (props) => {
  const { initialValue, onSubmit } = props;

  const [ classData, handleChange ] = useForm(initialValue);

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
          <DateTimeInput value={classData.dateTime} onChange={handleChange} />
        </div>

        <div className='field'>
          <label htmlFor='duration'>Duration (Minutes)</label>
          <input id='duration' name='duration' type='number' onChange={handleChange} value={classData.duration} />
        </div>

        <div className='field'>
          <label htmlFor='intensity'>Intensity</label>
          <select name='intensity' id='intensity' value={classData.intensity} onChange={handleChange}>
            <option disabled value=''> - Select a level - </option>
            {intensities.map(intensity => (
              <option value={intensity.id} key={intensity.id}>{intensity.name}</option>
            ))}
          </select>
        </div>

        <div className='field'>
          <label htmlFor='location'>Location (zip code)</label>
          <input id='location' name='location' type='number' onChange={handleChange} value={classData.location} />
        </div>

        <div className='field'>
          <label htmlFor='maxSize'>Maximum Class Size</label>
          <input id='maxSize' name='maxSize' type='number' onChange={handleChange} value={classData.maxSize} />
        </div>

        <div className='submitButton'>
          <StyledButton size='md'>
            Schedule Class
          </StyledButton>
        </div>

      </form>
    </StyledMain>
  );
}

const StyledMain = styled.div`
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
  }
`;



export default InstructorDash;
