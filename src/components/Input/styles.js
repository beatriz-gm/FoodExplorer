import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.DARK900};

  border-radius: 8px;

  > input {
    height: 48px;
    width: 100%;

    padding: 12px 14px;
    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT300};
    background: transparent;

  }

  > input:focus {
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT100};
    border-radius: 5px;
    outline: none;
  }

  &:placeholder {
    color: ${({theme}) => theme.COLORS.DARK500};
    
  }

`;