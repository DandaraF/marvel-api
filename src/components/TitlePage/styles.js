import styled from "styled-components";

export const ContentTitle = styled.div`
  padding: 10px 5px;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 1.8rem;
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
