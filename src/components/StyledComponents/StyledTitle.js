
import styled from 'styled-components';

export const StyledTitle = (props) => {
  const { children } = props;

  return (
    <StyledMain>
      {typeof children === 'string'
        ? <p>{children}</p>
        : children
      }
    </StyledMain>
  )
}

export const StyledMain = styled.div`

  display: inline-block;

  > *:first-child {
    width: calc(100% + 0.5em);
  }

  > *:first-child::after {
    content: "";
    background-color: ${props => props.theme.main};
    display: block;
    height: 2px;
    margin: 0.325em 0 0.5em 0;
    width: 100%;
  }
`;