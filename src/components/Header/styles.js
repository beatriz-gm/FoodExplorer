import styled from "styled-components";

export const Container = styled.div`
  height: 104px;
  width: 100%;

  display: flex;
  align-items: center;
  grid-area: header;

  background-color: ${({theme}) => theme.COLORS.DARK600};

`;