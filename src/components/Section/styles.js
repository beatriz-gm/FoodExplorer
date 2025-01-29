import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 48px;

  > h1 {
    color: ${({theme}) => theme.COLORS.LIGHT300};
    font-weight: 400;
    margin-bottom: 23px;
  }

  > .items {
    display: flex;
    flex-direction: row;
    gap: 27px;
  }

`;