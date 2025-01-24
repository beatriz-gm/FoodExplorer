import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 100px 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;

  > #logo{
    display: flex;
    align-items: center;
    margin-top: -100px;

    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT100};
      font-size: 48px;
      white-space: nowrap;
      margin-right: 11px;
    }
    > svg {
      color: ${({theme}) => theme.COLORS.CAKE100};
      margin-right: 19px;
      margin-left: 0px;
    }
  } 
`;

export const Form = styled.form`
  padding: 64px;
  gap: 32px;
  border-radius: 16px;
  background-color: ${({theme}) => theme.COLORS.DARK700};

  width: 476px;
  height: min-content;

  display: flex;
  flex-direction: column;
  align-self: center;

  text-align: center;

  > h2 {
    font-size: 40px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.LIGHT100};
  }

  > .input {
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    > label {
      font-family: 'Poppins', serif;
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.LIGHT400};
      text-align: left;
  }
  } 

  > a {
    color: ${({theme}) => theme.COLORS.LIGHT100};
    font-family: "Poppins", serif;

  }
`;