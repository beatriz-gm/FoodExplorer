import styled from "styled-components";

export const Container = styled.div`
  
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 172px;
  padding: 12px 14px;
  
  background-color: ${({theme}) => theme.COLORS.DARK900};
  color: ${({theme}) => theme.COLORS.LIGHT300};

  border-radius: 8px;
  border: none;
  resize: none;

  &::placeholder {
    font-family: 'Roboto', serif;
    font-size: 14px;
    font-weight: 400;
  color: ${({theme}) => theme.COLORS.LIGHT500};
  }

  &:focus {
    outline: none;
  }
`;

export const Img = styled.div`
  width: 230px;
  border-radius: 8px;
  padding: 12px 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.DARK900};
  color: ${({theme}) => theme.COLORS.LIGHT100};
  font-family: 'Roboto', serif;
  font-size: 14px;

  > svg {
    margin-right: 8px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Ingredients = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.DARK900};

  border-radius: 8px;
  padding: 8px;
  border: none;
`;

export const Main = styled.div`
padding: 104px 121px;
display: flex;
flex-direction: column;
gap: 32px;
color: ${({theme}) => theme.COLORS.LIGHT300};

  > .back {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;

    > p {
      font-size: 20px;
      font-family: Poppins;
      font-weight: bold;
    }
  }

  > h1 {
    font-weight: 400;
  }

  > .inputs {
    display: flex;
    flex-direction: row;
    gap: 32px;

    > .input {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }

    > .input label {
      font-family: 'Roboto', serif;
      font-size: 14px;
      font-weight: 300;
      color: ${({theme}) => theme.COLORS.LIGHT400};
    }
    
    > #image, #value {
      width: 230px;
    }

    > #title {
      max-width: 700px;
    }

    > #categ {
      width: 300px;
      > svg {
       margin-top: -53px;
       margin-left: 240px;
       &:hover {
        cursor: pointer;
       }
      }
    }
  }

  > #save {
    width: 172px;
    align-self: end;
    background-color: ${({theme}) => theme.COLORS.TOMATO400};

    &:hover {
    background-color: ${({theme}) => theme.COLORS.TOMATO300};
    }
  }


`;
