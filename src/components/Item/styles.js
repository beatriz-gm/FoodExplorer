import styled from "styled-components";

export const Container = styled.div`
  height: 462px;
  width: 304px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 24px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.COLORS.DARK200};

  > svg {
    color: ${({theme}) => theme.COLORS.LIGHT300};
    position: absolute;
  }

  > img {
    height: 176px;
    width: 176px;
    border-radius: 50%;
    object-fit: cover;
    align-self: center;
  }

  > h2 {
    color: ${({theme}) => theme.COLORS.LIGHT300};
    font-weight: bold;
    text-align: center;
  }

  > p {
    color: ${({theme}) => theme.COLORS.LIGHT400};
    font-family: 'Roboto', serif;
    font-weight: 300;
    text-align: center;
  }

  > h3 {
    color: ${({theme}) => theme.COLORS.CAKE200};
    font-family: 'Roboto', serif;
    font-weight: 300;
    font-size: 25px;
    text-align: center;
  }

  > .add {
    display: flex;
    flex-direction: row;
    gap: 16px;

    margin: 0 25px 0;
  }
`;

export const Add = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT100};
  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    font-size: 20px;
    font-family: 'Roboto', serif;
    margin: 0 14px;
  }
`;