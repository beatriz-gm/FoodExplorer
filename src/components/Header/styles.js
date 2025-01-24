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

  > #logo{
    display: flex;
    align-items: center;

    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT100};
      font-size: 28px;
      white-space: nowrap;
      margin-right: 11px;
    }
    > svg {
      color: ${({theme}) => theme.COLORS.CAKE100};
      margin-right: 10px;
      margin-left: 0px;
    }
  } 

  > input {
    color: ${({theme}) => theme.COLORS.LIGHT400};
    margin: 12px 14px 12px 100px;
  } svg {
    color: ${({theme}) => theme.COLORS.LIGHT400};
    margin: 0 auto 0 100px;
  }
  
  > button {
    margin: 24px auto;
    width: 216px;

    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 12px 46px;

    > svg {
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS.LIGHT100};

      margin-right: 8px;
      margin-left: 0px;
    }
  }

  > #logout {
    margin: none;
    background: none;
    padding: 0;

    > svg {
      color: ${({theme}) => theme.COLORS.LIGHT100};
      margin-left: 0px;
    }
  }
  

`;
