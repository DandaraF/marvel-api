import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
`;

export const Card = styled.div`
  padding: 0 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 170px;
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.text.light.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Img = styled.img`
  width: 170px;
  height: 220px;
  border-radius: 4px 4px 0 0;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "13px"};
  text-align: center;
`;

export const Text = styled.p`
  font-size: 0.8rem;
`;
