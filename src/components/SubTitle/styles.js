import styled from "styled-components";

export const Content = styled.div`
  padding: 10px 5px;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

export const SubTitle = styled.h1`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Hr = styled.div`
  margin-top: 2px;
  color: ${({ theme }) => theme.palette.background.input};
  border-top: 1px solid ${({ theme }) => theme.palette.background.input};
  @media (min-width: 768px) {
    margin-top: 5px;
  }
`;
