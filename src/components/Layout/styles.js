import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  flex-direction: column;
  align-content: space-around;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  margin: 20px 0;
`;

export const Footer = styled.div`
  flex-shrink: 0;
`;
