import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  min-width: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-flow: row wrap;

  @media (min-width: 768px) {
    min-width: 768px;
    max-width: 1200px;
    gap: 20px;
  }
`;

export const Text = styled.p``;
