import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.header};
  @media (min-width: 768px) {
    /* padding-top: 10px; */
  }
`;
export const Content = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;
  /* justify-content: flex-end; */
`;

export const ContentHeader = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  /* min-width: 350px; */
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
    /* display: flex;
    position: absolute;
    left: 15px; */
    width: 120px;
  }
`;
