import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 25px;
  }
`;

export const Text = styled.h1`
  font-size: 20px;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 25.6px;
    margin-top: 30px;
  }
`;

export const Img = styled.img`
  height: 300px;
  @media (min-width: 768px) {
    height: 500px;
  }
`;
