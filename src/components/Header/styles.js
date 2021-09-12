import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.header};
  @media (min-width: 768px) {
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentHeader = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 25px;
  padding: 0 10px;
  @media (min-width: 768px) {
    gap: 0;
    padding: 15px 10px 5px;
    margin: 0;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 25px;
  background-color: ${({ theme }) => theme.palette.background.input};
  @media (min-width: 768px) {
    height: 35px;
  }
`;

export const Img = styled.img`
  width: 100px;
  @media (min-width: 768px) {
    width: 120px;
  }
`;
