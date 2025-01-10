import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.TOMATO100};
  color: ${({theme}) => theme.COLORS.LIGHT100};
  font-weight: medium;
  line-height: 24px;

  padding: 12px 32px;
  border: 0;
  border-radius: 5px;

  margin-top: 10px;
  
`;