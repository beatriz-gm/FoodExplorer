import styled from "styled-components";

export const Container = styled.div`
`;

export const Main = styled.div` 
  padding: 104px 121px;
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

  > .item {
    display: flex;
    flex-direction: row;
    gap: 48px;
    align-items: center;

    > img {
      margin-top: 42px;
    }

    > .description {
      max-width: 687px;
    }

    > .description h1 {
      font-size: 35px;
      font-weight: 500;
      margin-bottom: 24px;
    }

    > .description p {
      font-family: "Poppins", serif;
      font-weight: 300;
    }
    
    > .description .tags {
      display: flex;
      flex-direction: row;
      gap: 12px;
      margin-top: 24px;
      margin-bottom: 48px;
    }
    > .description .add {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 33px;
      max-width: 294px;
    }
  }


`;

export const Add = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT100};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;

  > p {
    font-size: 20px;
    margin: 0 14px;
  }
`;