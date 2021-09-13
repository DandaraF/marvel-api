import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.text.primary};
  width: 95%;
  height: auto;
  border-radius: 2px;
  @media (min-width: 769px) {
    width: 35%;
  }
`;

export const BarTop = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: start;
  padding: 5px 10px 10px 10px;
  gap: 5px;
`;

export const Img = styled.img`
  width: 110px;
  height: 160px;
  @media (min-width: 768px) {
    width: 200px;
    height: 270px;
  }
`;
export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0 5px;
  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 15px;
  margin-bottom: -8px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Text = styled.p`
  text-align: justify;
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
