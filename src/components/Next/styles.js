import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* z-index: 0; */
  position: relative;
  
  > .right img, .left img {
    height: 462px;
  }
  
  > .right img {
    margin-right: -79px;
  }
  
  > .right svg, .left svg {
    color: ${({theme}) => theme.COLORS.LIGHT100};
    cursor: pointer;
  }
  
  > .left svg {
    margin: 184px -260px 224px;
  }

  > .right svg {
    margin: 184px 20px 224px;
  }
`;
