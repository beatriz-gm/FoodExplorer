import styled from "styled-components";

export const Container = styled.div`
  height: 104px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: header;
  gap: 32px;
  padding: 0 123px;

  background-color: ${({theme}) => theme.COLORS.DARK600};

  > h1 {
    font-size: 28px;
  }

  > input{
    
  } svg {
    color: ${({theme}) => theme.COLORS.LIGHT400};
    margin: 12px 14px 12px 100px;
  }

  > button {
    margin: 24px auto;
    width: 216px;
  }

`;