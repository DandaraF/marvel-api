import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.header};
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const ContentHeader = styled.div`
  margin: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 350px;
  width: 55%;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 25px;
  background-color: ${({ theme }) => theme.palette.background.input};
`;

export const Img = styled.img`
  margin-left: 10px;
  width: 100px;
  @media (min-width: 768px) {
    margin-left: 0;
    width: 120px;
  }
`;
