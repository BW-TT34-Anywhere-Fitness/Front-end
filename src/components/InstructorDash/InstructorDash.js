
import styled from 'styled-components';

import { StyledTitle } from 'components/StyledComponents';
import ClassForm from 'components/ClassForm';

const initialClassData = {
  name: '',
  type: '',
  time: '',
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

      <ClassForm onSubmit={createClass} initialValue={initialClassData} />

    </StyledMain>
  );
}

const StyledMain = styled.section`
  max-width: 1400px;
  margin: auto;
  padding-bottom: 10em;
`;

export default InstructorDash;
