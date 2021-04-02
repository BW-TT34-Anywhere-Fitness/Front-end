
import React from 'react';
import styled from 'styled-components';



/**
 * Modal is a generalized Modal component. Requires props to work: isOpen, setOpen.
 * 
 * To use it, wrap the stuff that you want inside the modal like so:
 * 
 * <Modal isOpen={modalOpen} close={closeModal}>
 *   <p> My thing </p>
 * </Modal>
 */

function Modal(props) {
  const { isOpen, closeModal, backgroundColor, children } = props;

  const handleCloseClick = (e) => {
    console.log(e);
    if (closeModal) {
      closeModal();
    }
    else {
      console.warn('Modal has no closeModal function.')
    }
  }

  if (isOpen === undefined) {
    console.warn('Modal is missing a prop: "isOpen"');
  }

  if (!isOpen) return <></>

  return (
    <ModalDiv onClick={handleCloseClick}>
      <div
        className='children-div'
        onClick={
          e => e.stopPropagation() // This prevents the modal from closing when the user clicks inside.
        }
        style={{background: {backgroundColor}}}
      >
        {children}
      </div>
    </ModalDiv>
  );
}

export default Modal;



const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  max-width: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
  z-index: 10;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  .children-div {
    cursor: default;
    background: ${props => props.theme.background};
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 4px 4px 1px hsla(0, 0%, 0%, 0.2);
    max-height: 90vh;
    overflow-y: auto;
  }
`;
