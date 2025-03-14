import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.LIGHT600};
  color: ${({theme}) => theme.COLORS.LIGHT100};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT600}` : "none"};

  border-radius: 8px;
  padding-right: 16px;


  > button {
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.LIGHT100};

    > svg {
      margin-top: 5px;
    }
  }

  > input {
    height: 32px;
    width: 90px;
    padding: 0 16px;
    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT100};
    background: transparent;


    &::placeholder {
      color: ${({theme}) => theme.COLORS.LIGHT600};
    }

    &:focus {
      outline: none;
    }
  }
`;