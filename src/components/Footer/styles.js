import styled from "styled-components";

export const Container = styled.div`
  height: 77px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;

  position: static;
  bottom: 0;
  left: 0;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({theme}) => theme.COLORS.LIGHT700};
  }

  > p {
    color: ${({theme}) => theme.COLORS.LIGHT200};
    font-family: "Poppins", serif;
    font-size: 12px;
  }

`;