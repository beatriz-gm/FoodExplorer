import styled from "styled-components";

export const Container = styled.div`

  > body {
      padding: 104px 123px 0;
    }
    
`;

export const Banner = styled.div`
  height: 260px;
  display: flex;
  gap: 12px;
  background-color: ${({theme})=> theme.COLORS.GRADIENT};
  border-radius: 8px;
  margin: 164px 0 62px;

  img {
    width: 645px;
    height: 400px;
    margin-left: -70px;
    margin-top: -140px;
  }

  > div{
    margin-top: 88px;
    margin-right: 100px;
    h1 {
        font-family: "Poppins", sans-serif;
        font-size: 50px;
        font-weight: 500;
        
      }
    h1, p {
      color: ${({theme}) => theme.COLORS.LIGHT300};
      white-space: nowrap;
      text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    }
    p {
        margin-top: 8px;
        font-size: 16px;
        font-family: "Roboto", sans-serif;

    }
  }
`;