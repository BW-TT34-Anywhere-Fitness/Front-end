
import styled from 'styled-components';

import { StyledTitle } from 'components/StyledComponents';
import ClassForm from 'components/ClassForm';

const initialClassData = {
  name: '',
  type: '',
  dateTime: '',
  duration: '',
  intensity: '',
  location: '',
  maxSize: '',
}



const InstructorDash = (props) => {

  const createClass = (classData) => {
    console.log('createClass:', classData);
  }

  return (
    <StyledMain>

      <StyledTitle>
        <h1>Instructor Dashboard</h1>
      </StyledTitle>

      <h2>Schedule a Class</h2>

      <ClassForm onSubmit={createClass} initialValue={initialClassData} />

    </StyledMain>
  );
}

const StyledMain = styled.section`
  max-width: 1400px;
  margin: auto;
  padding-bottom: 10em;

  input, select, option, textArea {
    border: none;
    background-color: ${props => props.theme.field};
    color: ${props => props.theme.main};
    padding: 0 1em;

    :focus {
      outline: 2px solid ${props => props.theme.selected};
    }
  }

  input, select {
    height: 2.75em;
  }

  *:focus {
    outline: 0
  }
`;

export default InstructorDash;