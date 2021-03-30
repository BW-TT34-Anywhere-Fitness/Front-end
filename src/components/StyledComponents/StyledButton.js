
import styled from 'styled-components';

/**
 * size options: lg, md, sm, fit
 * variant options: filled, outlined
 */
export const StyledButton = (props) => {
  const { children, size='md', variant='filled', fit } = props;

  return (
    <StyledMain style={{ width: fit && '100%' }}>
      <button className={`${size} ${variant} ${fit ? 'fit' : ''}`}>
        {children}
      </button>
    </StyledMain>
  );
}

export const StyledMain = styled.div`

  button {
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    letter-spacing: 0.25em;
    padding: 0 1.75em;
    text-transform: uppercase;
    white-space: nowrap;
    
    // md
    font-size: 0.8em;
    line-height: 3.5em;
    
    // filled
    background: ${props => props.theme.main};
    color: ${props => props.theme.contrastText};
  }

  .lg {
    font-size: 1.25em;
    height: 3em;
    line-height: 3em;
  }

  .sm {
    font-size: 0.6em;
  }

  .outlined {
    background-color: transparent;
    border: 2px solid ${props => props.theme.main};
    color: ${props => props.theme.main};
  }

  .fit {
    width: 100%;
  }
`;
