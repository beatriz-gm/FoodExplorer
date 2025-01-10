import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: 4px 8px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.COLORS.DARK1000};

  > p {
    font-family: "Poppins", sans-serif;
    font-weight: medium;
    font-size: 12px;
    color: ${({theme}) => theme.COLORS.LIGHT100};
  }
  
`;