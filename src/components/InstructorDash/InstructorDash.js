
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { StyledTitle } from 'components/StyledComponents';
import ClassForm from 'components/ClassForm';
import InstructorClassList from './InstructorClassList';
import Modal from 'components/Modal';

import { getClasses, createClass, editClass, deleteClass } from 'functions/api';

const initialFormData = {
  name: '',
  type: '',
  starttime: '',
  duration: '',
  intensity: '',
  location: '',
  maxsize: '',
}



const InstructorDash = (props) => {

  const [ classes, setClasses ] = useState(null);
  const [ classToCreate, setClassToCreate ] = useState(initialFormData);
  const [ classToEdit, setClassToEdit ] = useState(null);
  const [ classToDelete, setClassToDelete ] = useState(null);

  useEffect(() => {
    console.log(classToDelete);
  }, [ classToDelete ]);

  useEffect(() => {
    handleGetClasses();
  }, []);

  const handleGetClasses = () => {
    getClasses()
      .then(res => {
        console.log(res);
        setClasses(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleCreateClass = (classData) => {
    createClass(classData)
      .then(res => {
        console.log(res);
        handleGetClasses();
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleDeleteClass = (classData) => {
    deleteClass(classData)
      .then(res => {
        console.log(res);
        setClasses(classes.filter(c => c.id !== classData.id));
        setClassToDelete(null);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleEditClass = (classData) => {
    editClass(classData)
      .then(res => {
        console.log(res);
        setClasses(classes.map(c => c.id !== classData.id ? c : classData));
        setClassToEdit(null);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <StyledMain>

      <StyledTitle>
        <h1>Instructor Dashboard</h1>
      </StyledTitle>

      <h2>Schedule a Class</h2>

      <ClassForm onSubmit={handleCreateClass} initialValue={classToCreate} />

      <InstructorClassList classes={classes} setClassToEdit={setClassToEdit} setClassToDelete={setClassToDelete} />

      {/* Edit Class Modal */}
      <Modal isOpen={classToEdit} closeModal={() => setClassToEdit(null)} backgroundColor='#242943'>
        <div className='modal-div'>

          <h2>Editing Class</h2>
          <ClassForm value={classToEdit} onSubmit={handleEditClass} buttonText='Save Changes' />
        </div>
      </Modal>

      {/* Delete Class Modal */}
      <Modal isOpen={classToDelete} closeModal={() => setClassToDelete(null)}>
        <div className='modal-div'>
          <p>Delete {classToDelete?.name || 'this class'}?</p>
          <div className='button-row'>
            <p onClick={() => setClassToDelete(null)}>No</p>
            <p onClick={() => handleDeleteClass(classToDelete)}>Yes</p>
          </div>
        </div>
      </Modal>
    </StyledMain>
  );
}

const StyledMain = styled.section`
  max-width: 1400px;
  margin: auto;
  padding-bottom: 10em;
  padding: 1em;

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

  .modal-div {
    padding: 0 1em;

    .button-row {
      display: flex;
      justify-content: space-around;

      p {
        color: ${props => props.theme.selected};
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;



export default InstructorDash;
