import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    display: none;
    width: 0;
    height: 0;
  }
`;

export const Toggle = styled.button`
  display: flex;
  text-decoration: none;
  border: none;
  background-color: ${({ theme }) => theme.palette.background.header};
  width: 25px;
  height: 25px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Img = styled.img`
  width: 25px;
  height: 25px;
  @media (min-width: 768px) {
    display: none;
  }
`;
